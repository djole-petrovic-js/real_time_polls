const
  express   = require('express'),
  bluebird  = require('bluebird'),
  sequelize = require('sequelize'),
  moment    = require('moment'),
  router    = express.Router();

const
  redirectIfNotLoggedIn = require('../utils/redirectIfNotLoggedIn'),
  generateLog            = require('../utils/generateLog'),
  Types                 = require('../libs/types'),
  Form                   = require('../libs/form'),
  Password               = require('../libs/Password'),
  MainSettings           = require('../config/config'),
  generateError          = require('../utils/generateError');

const {
  db:{
    User,Poll,
    Choice,UserPoll
  }
} = require('../models/models');

const {
  maxPollsPerUser,
  transporter,
  minUsernameChangePeriod,
  minPasswordChangePeriod,
  usernameRegex,
  passwordRegex
}  = require('../config/config');

const {
  limitLatestPolls,
  limitMostPopularPolls
} = require('../config/config');

router.get('/getPopularPolls',async(req,res,next) => {
  try {
    const popularPolls = await Poll.findAll({
      limit:limitMostPopularPolls,
      include:[{
        model:Choice
      }],
      order:[
        ['votes','DESC']
      ]
    });

    res.json(popularPolls);

  } catch(e) {
    return next(generateError('Something wrong...'));
  }
});



router.get('/getNewPolls',async(req,res,next) => {
  try {
    const popularPolls = await Poll.findAll({
      limit:limitLatestPolls,
      include:[{
        model:Choice
      }],
      order:[['created_date','DESC']]
    });

    res.json(popularPolls);
      
  } catch(e) {
    return next(generateError('Something wrong...'));
  }
});



router.post('/getOnePoll',async(req,res,next) => {
  try {
    const { pollID } = req.body;

    const poll = await Poll.findOne({
      where:{
        id_poll:pollID
      },
      include:[{
        model:Choice
      }]
    });

    res.json(poll);

  } catch(e) {
    return next(generateError('Error while getting poll, please try again...'));
  }
});



router.post('/checkUsername',async(req,res,next) => {
  try {
    const username = req.body.username;

    if ( !username ) {
      return res.json({
        error:true,
        success:false,
        userExists:false,
        message:'Username is missing...'
      });
    }

    const user = await User.findOne({
      where:{ username:username.trim() }
    });

    if ( user ) {
      return res.json({
        error:false,
        success:true,
        userExists:true,
        message:'This username already exists...'
      });
    }

    res.json({
      error:false,
      success:true,
      userExists:false,
      message:'Username is avaible...'
    });

  } catch(e) {
    return next(generateError('Error while checking username, please try again...'));
  }
});




router.post('/checkEmail',async(req,res,next) => {
  try {
    let { email } = req.body;

    if ( !email ) {
      return res.json({
        error:true,
        success:false,
        emailExists:false,
        message:'Email is missing...'
      });
    }

    const user = await User.findOne({
      where:{ email:email.trim() }
    });

    if ( user ) {
      return res.json({
        error:false,
        success:true,
        emailExists:true,
        message:'Email already exists...'
      });
    }

    res.json({
      error:false,
      success:true,
      emailExists:false,
      message:'Email is avaible...'
    });

  } catch(e) {
    return next(generateError('Error while checking email, please try again...'));
  }
});



router.use(redirectIfNotLoggedIn);


router.get('/getPolls',async(req,res,next) => {
  try {
    const allPolls = await Poll.findAll({
      where:{
        UserIdUser:req.user.id_user
      },
      include:[{
        model:Choice
      }]
    });

    res.json(allPolls);

  } catch(e) {
    return next(generateError('Could not get the polls, please try again...'));
  }
});



router.get('/getVotingInfo',async(req,res,next) => {
  try {
    const votes = await UserPoll.findAll({
      where:{
        UserIdUser:req.user.id_user
      },
      include:[{
        model:Choice,
        include:[{
          model:Poll
        }]
      }]
    });

    res.json(votes);

  } catch(e) {
    return next(generateError('Could not get your votes, please try again...'));
  }
});



router.post('/disablePoll',async(req,res,next) => {
  const { pollID } = req.body;

  try {
    const poll = await Poll.findOne({
      where:{
        id_poll:pollID
      }
    });

    if ( !poll ) {
      return res.json({
        error:true,
        message:'Poll doenst exist...'
      });
    }

    if ( poll.UserIdUser !== req.user.id_user ) {
      return res.json({
        error:true,
        message:'You dont have the permission to disable this poll...'
      });
    }

    const disablePollInfo = await Poll.update({
      is_active:false,
      closed_at:sequelize.literal('CURRENT_TIMESTAMP')
    },{
      where:{
        id_poll:pollID
      }
    });

    res.json({
      success:true
    });

  } catch(e) {
    return next(generateError('Could not disable poll, please try again...'));
  }
});



router.post('/deletePoll',async(req,res,next) => {
  const { pollID } = req.body;

  try {
    const pollInfo = await Poll.findOne({
      raw:true,
      where:{
        id_poll:pollID
      }
    });

    if ( !pollInfo ) {
      return next(generateError('Poll not found...'));
    }

    if ( pollInfo.UserIdUser !== req.user.id_user ) {
      return next(generateError('You dont have the permission to delete this poll...'));
    }

    const deletePollInfo = await Poll.destroy({
      where:{
        id_poll:pollID
      }
    });

    res.json({
      success:true
    });

  } catch(e) {
    try {
      await generateError('polls',e);
    } catch(e) { }

    return next(generateError('Could not delete poll, please try again...'));
  }
});



router.post('/vote',async(req,res,next) => {
  if ( MainSettings.ALLOW_VOTING === 0 ) {
    return next(generateError('Voting has been temporarily disabled...',503));
  }

  try {
    const
      { id_choice,id_poll } = req.body,
      { id_user }            = req.user;

    if (
      !id_choice || 
      !id_poll   ||
      !Types.isNumber(id_choice) ||
      !Types.isNumber(id_poll)
    ) {
      return res.json({
        error:true,
        message:'Something went wrong...'
      });
    }

    const poll = await Poll.findOne({
      where:{ id_poll }
    });

    if ( !poll ) {
      return res.json({
        error:true,
        message:'Poll not found...'
      });
    }

    if ( !poll.is_active ) {
      return res.json({
        error:true,
        message:'Poll is not active anymore...'
      });
    }

    const checkIfVotedInfo = await UserPoll.findOne({
      where:{
        PollIdPoll:id_poll,
        UserIdUser:id_user
      }
    });

    if ( checkIfVotedInfo ) {
      return res.json({
        error:true,
        message:'You have already voted on this pol...'
      });
    }

    poll.votes += 1;

    await poll.save();

    await Choice.update({
      number_of_votes:sequelize.literal('number_of_votes + 1')
    },{
      where:{ id_choice }
    });

    await UserPoll.create({
      PollIdPoll:id_poll,
      UserIdUser:id_user,
      ChoiceIdChoice:id_choice
    });

    res.json({
      success:true
    });

  } catch(e) {
    try {
      await generateLog('polls',e);
    } catch(e) { }
    return next(generateError('Could not vote, please try again...'));
  }
});



router.post('/addPoll',async(req,res,next) => {
  if ( !MainSettings.ALLOW_ADDING_NEW_POLLS ) {
    return next(generateError('Adding new polls has been temporarily disabled...',503));
  }

  const  { pollName,choices,showUsername } = req.body;

  if ( !Types.isString(pollName) || !Types.isStringArray(choices) ) {
    return next(generateError('Something went wrong, please try again...'));
  }

  if ( pollName.length < 10 || choices.length > 40 ) {
    return res.json({
      error:true,
      message:'Poll name must have at least 10 and maximum 40 characters'
    });
  }

  if ( choices.length === 0 ) {
    return res.json({
      error:true,
      message:'No choices are entered...'
    });
  }

  const duplicate = choices.find(
    (x,i,arr) => arr.includes(x) && arr.lastIndexOf(x) !== i
  );

  if ( duplicate ) {
    return res.json({
      error:true,
      message:'You have duplicate choices...',
      data:duplicate
    });
  }

  const invalidChoices = choices.filter(c => c.length < 1 || c.length > 30);

  if ( invalidChoices.length ) {
    return res.json({
      error:true,
      message:'Invalid choices',
      data:invalidChoices.map(
        c => `Your choice, "${c}", must have at least 2 and maximum 30 characters`
      )
    });
  }

  try {
    const numberOfPolls = await Poll.count({
      where:{
        UserIdUser:req.user.id_user
      }
    });

    if ( numberOfPolls > maxPollsPerUser ) {
      return res.json({
        error:true,
        message:'Maximum limit exceded...'
      });
    }
    
    const pollInfo = await Poll.create({
      poll:pollName,
      UserIdUser:req.user.id_user,
      show_username:showUsername
    });

    await Choice.bulkCreate(choices.map(x => ({
      choice:x,
      PollIdPoll:pollInfo.id_poll
    })));

    res.json({
      pollID:pollInfo.id_poll,
      success:true,
      message:'Poll successfully added...'
    });

  } catch(e) {
    generateLog('polls',e)

    return next(generateError('Something went wrong, please try again...'));
  }
});


/*
  User account routes
*/


router.get('/getUserInfo',async(req,res,next) => {
  try {
    const user = await User.findOne({
      attributes:[
        'username','email',
        'register_date'
      ],
      where:{
        id_user:req.user.id_user
      }
    });

    res.json(user);
  } catch(e) {
    generateLog('user_account',e)

    return next(generateError('Something went wrong, please try again...'));
  }
});


router.post('/changeUsername',async(req,res,next) => {
  try {
    const { newUsername } = req.body;

    if ( !newUsername ) {
      return res.json({
        error:true,
        message:'Username missing...'
      });
    }

    const user = await User.findOne({
      where:{
        id_user:req.user.id_user
      }
    });

    if ( !user ) {
      try {
        await generateLog('user_account',e);
      } catch(e) { }
    
      return next(generateError('Something went wrong, please try again'));
    }

    if ( user.username_change_date !== null ) {
      const
        currentDate = moment().utc(1).toISOString(),
        minUPeriod  = minUsernameChangePeriod;

      if ( moment(currentDate).diff(user.username_change_date,'days') <= minUPeriod ) {
        return res.json({
          error:true,
          message:'It seems like you have changed your username recently...'
        });
      }
    }

    const form = new Form({ newUsername });

    form
      .field('newUsername')
      .validate('required','Username is required...')
      .validate('minlength',5,'Username must have a least 5 characters...')
      .validate('maxlength',20,'Username is too long...')
      .validate('regex',usernameRegex,'Username is not properly formated...');

    if ( !form.isValid() ) {
      return res.json({
        error:true,
        message:form.getOnlyFirstErrorForEachField()[0]
      });
    }

    await User.update({
      username:newUsername,
      username_change_date:sequelize.literal('CURRENT_TIMESTAMP')
    },{
      where:{
        id_user:req.user.id_user
      }
    });

    res.json({
      success:true
    });

  } catch(e) {
    await generateLog('user_account',e)

    return next(generateError('Something went wrong, please try again...'));
  }
});




router.post('/changePassword',async(req,res,next) => {
  try {
    const { current,newPassword,confirmNew } = req.body;

    const user = await User.findOne({
      where:{
        id_user:req.user.id_user
      }
    });

    if ( !user ) {
      generateLog('user_account',e);
    
      return next(generateError('Something went wrong, please try again'));
    }

    if ( user.password_change_date !== null ) {
      const
        currentDate = moment().utc(1).toISOString(),
        minPPeriod  = minPasswordChangePeriod;

      if ( moment(currentDate).diff(user.password_change_date,'days') <= minPPeriod ) {
        return res.json({
          error:true,
          message:'It seems that you have changed your password recently...'
        });
      }
    }  

    const isMatched = await Password.compare(current,user.password);

    if ( !isMatched ) {
      return res.json({
        error:true,
        message:'Invalid password'
      });
    }

    const form = new Form({ newPassword,confirmNew });

    form
      .field('newPassword')
      .validate('required','Password is missing...')
      .validate('minlength',8,'Password must have a least 8 characters...')
      .validate('maxlength',20,'Password is too long...')
      .validate('regex',passwordRegex,'Password is not properly formated')
      .validate('equalsAnotherField','confirmNew','Passwords doesnt match...');

    form
      .field('confirmNew')
      .validate('required','You have to confirm password...');

    if ( !form.isValid() ) {
      return res.json({
        error:true,
        errorArray:form.getOnlyFirstErrorForEachField(),
        message:'Please enter correct data...'
      });
    }

    const hash = await Password.hash(newPassword);

    await User.update({
      password:hash,
      password_change_date:sequelize.literal('CURRENT_TIMESTAMP')
    },{
      where:{
        id_user:user.id_user
      }
    });

    const nodeMail = bluebird.promisifyAll(transporter);

    const mailOptions = {
      from:'djolescarface@gmail.com',
      to:user.email,
      subject:'Password change',
      html:`
        <h1>You password has been changed...</h1>
      `
    };

    await nodeMail.sendMail(mailOptions);

    res.json({
      error:false,
      success:true
    });

  } catch(e) {
    generateLog('user_account',e);
    
    return next(generateError('Something went wrong, please try again'));
  }
});



router.post('/deleteAccount',async(req,res,next) => {
  try {
    const { password } = req.body;

    if ( !password ) {
      return res.json({
        error:true,
        message:'Password is missing...'
      });
    }

    const user = await User.findOne({
      where:{
        id_user:req.user.id_user
      }
    });

    if ( !user ) {
      return next(generateError('Something went wrong, please try again...'));
    }  

    const isMatched = await Password.compare(password,user.password);

    if ( !isMatched ) {
      return res.json({
        error:true,
        message:'Incorect password...'
      });
    }

    await User.destroy({
      where:{
        id_user:req.user.id_user
      }
    });

    req.logout();

    req.session.destroy((err) => {
      res.json({
        error:false,
        success:true
      });
    });

  } catch(e) {
    generateLog('user_account',e);

    return next(generateError('Something went wrong, please try again...'));
  }
});



module.exports = router;
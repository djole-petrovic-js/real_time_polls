const
  express  = require('express'),
  uuid     = require('uuid/v4'),
  moment   = require('moment'),
  passport = require('passport'),
  bluebird = require('bluebird'),
  csurf    = require('csurf'),
  router   = express.Router();

const
  Types                        = require('../libs/types'),
  checkIfUsernameOrEmailExists = require('../utils/checkIfUsernameOrEmailExists'),
  generateError                = require('../utils/generateError'),
  generateLog                   = require('../utils/generateLog'),
  createOrUpdateToken          = require('../utils/createOrUpdateToken'),
  validateRegisterForm          = require('../utils/validateRegisterForm'),
  saveSessionAndRedirect       = require('../utils/saveSessionAndRedirect'),
  sendVerificationEmail        = require('../utils/sendVerificationEmail'),
  trimObjectValues              = require('../utils/trimObjectValues'),
  MainSettings                  = require('../config/config'),
  redirectIfLoggedIn            = require('../utils/redirectIfLoggedIn');

const {
  tokenExpiration,
  accountExpiration
} = require('../config/config');

const { 
  db:{
    User,Token,
    BannedEmail
  }
} = require('../models/models');

const checkForEmptyFieldsAndPasswordsMatch = 
  require('../utils/checkForEmptyFieldsAndPasswordsMatch');

router.use((req,res,next) => {
  if ( !MainSettings.ALLOW_USER_REGISTRATION ) {
    return next(generateError('User registration has been templorarily desabled...',503));
  }

  next();
});

router.use(redirectIfLoggedIn);

router.use(csurf({ cookie:true }));

router.get('/',(req,res,next) => {
  const
    errors      = req.flash('error'),
    success     = req.flash('success'),
    userData     = {},
    errorsExist = !!(errors && errors.length);

  if ( errorsExist ) {
    Object.assign(userData,req.flash('userData')[0]);
  }

  res.render('register',{
    csrfToken:req.csrfToken(),
    errors:errorsExist ? errors : [],
    success:success && success.length ? success : [],
    title:'Register',
    userData
  });
});



router.get('/confirm_registration',async(req,res,next) => {
  try {
    const urlToken = req.query.token;

    if ( !urlToken ) {
      return next(generateError('Token is missing...'));
    }

    const token = Types.isArray(urlToken) ? urlToken[0] : urlToken;

    const user = await User.findOne({
      required:true,
      include:[{
        model:Token,
        where:{
          token
        }
      }]
    });

    if ( !user ) {
      return next(generateError('Token not found...'));
    }

    if ( user.is_activated ) {
      return next(generateError('Your account is already activated...'));
    }

    const 
      currentDate = moment().utc(1).toISOString(),
      tokenDate   = user.Token.dataValues.created_date;

    if ( moment(currentDate).diff(tokenDate,'days') >= tokenExpiration ) {
      return next(generateError('Token has expired...'));
    }

    if ( moment(currentDate).diff(user.is_activated,'days') >= accountExpiration ) {
      return next(generateError('Your account is disabled...'));
    }

    user.is_activated = true;

    await user.save();

    req.login(user.get(),(err) => {
      if ( err ) {
        return next(err);
      }

      saveSessionAndRedirect(req,res,'/');
    });
  } catch(e) {
    generateLog('register',e);

    return next(generateError('Something went wrong, please try again...'));
  }
});




router.post('/',async(req,res,next) => {
  trimObjectValues(req.body);

  const {
    username,
    password,
    confirmPassword,
    email
  } = req.body;

  const userData = { username,password,confirmPassword,email };

  const errors = checkForEmptyFieldsAndPasswordsMatch({
    username,password,confirmPassword,email
  });

  if ( errors.length ) {
    errors.forEach(e => req.flash('error',e));

    req.flash('userData',userData);

    return saveSessionAndRedirect(req,res,'/register');
  }

  try {
    const bannedEmail = await BannedEmail.findOne({
      raw:true,
      where:{ banned_email:email }
    });

    if ( bannedEmail ) {
      req.flash('error','You cant use this email...');
      req.flash('userData',userData);

      return saveSessionAndRedirect(req,res,'/register');
    }

    const {
      usernameExists,
      emailExists
    } = await checkIfUsernameOrEmailExists({
      username,email
    });

    if ( usernameExists || emailExists ) {
      req.flash('error',usernameExists
        ? 'Username already exists...'
        : 'Email already exists...'
      );

      req.flash('userData',userData);

      return saveSessionAndRedirect(req,res,'/register');
    }
  } catch(e) {
    return next(generateError('Oops something went wrong...'));
  }

  try {
    const form = await validateRegisterForm({
      username,password,email
    });

    if ( !form.isValid() ) {
      form
        .getOnlyFirstErrorForEachField()
        .forEach(e => req.flash('error',e));

      req.flash('userData',userData);

      return saveSessionAndRedirect(req,res,'/register');
    }
  } catch(e) {
    generateLog('register',e);

    return next(generateError('Oops something went wrong...'));
  }

  const token = uuid();

  try {
    const { dataValues:{ id_user } } = await User.create({
      username,
      password,
      email
    },{
      raw:true
    });

    await createOrUpdateToken({
      userID:id_user , token
    });

  } catch(e) {
    generateLog('register',e);

    return next(generateError('Error while creating your account,please try again...'));
  }

  try {
    const info = await sendVerificationEmail({
      to:email,
      token
    });

    req.flash('success','Your account is fine...');

    return saveSessionAndRedirect(req,res,'/register');
  } catch(e) {
    generateLog('email',e);

    return next(generateError('Error while sending verification email...'));
  }
});




module.exports = router;
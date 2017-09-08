const pollsRouter = (io) => {
  const
    express = require('express'),
    router  = express.Router();

  const
    { pollsPerPage } = require('../config/config'),
    generateError    = require('../utils/generateError'),
    generateLog      = require('../utils/generateLog');

  const {
    db:{
      Poll,Choice,
      User,UserPoll
    }
  }  = require('../models/models');

  router.get(/^\/?([1-9][0-9]*)?$/,async(req,res,next) => {
    const page = req.params['0'] || 1;

    //search query
    const q = req.query.q
      ? { poll:{ $like:`%${ req.query.q }%` }}
      : {};

    try {
      const
        limit          = pollsPerPage,
        offset         = page * pollsPerPage - pollsPerPage,
        numberOfPolls = await Poll.count({ where:q }),
        lastPage       = Math.ceil(numberOfPolls / pollsPerPage);

      const polls = await Poll.findAll({
        raw:true,
        offset,
        limit,
        where:q,
        order:[['created_date','DESC']]
      });

      res.render('polls',{
        user:req.user,
        title:'Polls',
        currentPage:page,
        q:req.query.q || null,
        lastPage,  
        polls,
      });

    } catch(e) {
      try {
        await generateLog('polls',e);
      } catch(e) {}

      return next(generateError('Internal error, please try again...'));
    }
  });

  router.get(/^\/monitor\/([1-9][0-9]*)(\/[^<>]*)?$/,async(req,res,next) => {
    try {
      const pollID = req.params['0'];

      const poll = await Poll.findOne({
        where:{
          id_poll:pollID
        },
        include:[{
          model:User
        },{
          model:Choice
        }]
      });

      if ( !poll ) {
        return res.render('polls_monitor',{
          user:req.user,
          title:'Polls'
        });
      }

      const sumOfVotes = poll.Choices.reduce(
        (sum,{ number_of_votes:n }) => sum += n,0
      );

      poll.Choices = poll.Choices.map(choice => {
        choice.percentage = sumOfVotes !== 0
          ? (choice.number_of_votes / sumOfVotes * 100).toFixed(2) + '%'
          : '0%';

        return choice;
      });

      let
        alreadyVoted  = false,
        idVotedChoice = null;

      if ( poll && req.isAuthenticated() ) {
        const userVoteInfo = await UserPoll.findOne({
          where:{
            PollIdPoll:pollID,
            UserIdUser:req.user.id_user
          }
        });

        if ( userVoteInfo ) {
          alreadyVoted = true;
          idVotedChoice = userVoteInfo.ChoiceIdChoice;
        }
      }

      res.render('polls_monitor',{
        user:req.user,
        title:'Polls' + (poll ? ` | ${ poll.poll }` : ''),
        idVotedChoice,
        alreadyVoted,
        sumOfVotes,
        poll
      });

    } catch(e) {
      generateLog('polls',e)

      return next(generateError('Internal error, please try again...'));
    }
  });

  io.on('connection',(socket) => {
    socket.on('userVoted',(data) => {
      socket.broadcast.emit('userVotedData',data);
    });

    socket.on('msgSent',async(data) => {
      const userID = socket.handshake.session.passport.user;

      if ( !userID ) return;

      try {
        const poll = await Poll.findOne({
          where:{
            id_poll:data.pollID
          }
        });

        if ( !poll.is_active ) return;

        const { username } = await User.findOne({
          attributes:['username'],
          raw:true,
          where:{ id_user:userID } 
        });

        io.emit('msgSentServer',{
          username,
          message:data.message,
          pollID:data.pollID
        });

      } catch(e) {
        generateLog('sockets',e)
      }
    });

    socket.on('pollAdded',async(data) => {
      try {
        const poll = await Poll.findOne({
          where:{
            id_poll:data.pollID
          },
          include:[{
            model:Choice
          }]
        });

        socket.broadcast.emit('newPollAdded',poll);

      } catch(e) {
        generateLog('sockets',e)
      }
    });

  });

  return router;
}

module.exports = pollsRouter;
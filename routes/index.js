const
  express   = require('express'),
  sequelize = require('sequelize'),
  router    = express.Router();

const
  { db:{ User,Poll,Choice },connection } = require('../models/models'),
  generateError                = require('../utils/generateError'),
  generateLog                  = require('../utils/generateLog');

router.get('/',async(req,res,next) => {
  try {
    res.render('index',{
      title:'RTP',
      user:req.user,
    });

  } catch(e) {
    generateLog('index',e)

    return next(generateError('Something went wrong, please reload the page...'));
  }
});

module.exports = router;
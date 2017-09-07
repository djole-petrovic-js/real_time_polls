const
  { db:{ User } } = require('../models/models'),
  generateError   = require('./generateError'),
  Password        = require('../libs/Password');

const passwordProtected = async(req,res,next) => {
  if ( !req.isAuthenticated() ) {
    return next(generateError('Not permitted',403));
  }

  const { password } = req.body;

  if ( !password ) {
    return res.json({
      error:true,
      message:'Password is missing...'
    });
  }

  try {
    const user = await User.findOne({
      raw:true,
      attributes:['password'],
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
        message:'Incorrect password...'
      });
    }

    next();
  } catch(e) {
    return next(generateError('Something went wrong, please try again...'));
  }
}

module.exports = passwordProtected;
const
  Strategy         = require('passport-local').Strategy,
  { db:{ User } } = require('../../models/models'),
  Password        = require('../../libs/Password');

const passportStrategy = new Strategy(async(username,password,done) => {
  try {
    const user = await User.findOne({
      raw:true,
      where:{
        username
      }
    });

    if ( !user ) {
      return done(null,false,{ message:'Username or password is incorect...' });
    }

    if ( !user.is_activated ) {
      return done(null,false,{ message:'Your account is not activated...' });
    }
    
    const isMatched = await Password.compare(password,user.password);

    if ( !isMatched ) {
      return done(null,false,{ message:'Username or password is incorect...' })
    }

    return done(null,user);

  } catch(e) {
    return done(e);
  }
});

module.exports = passportStrategy;
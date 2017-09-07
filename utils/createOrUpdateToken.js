const
  { db:{ Token } } = require('../models/models');

const createOrUpdateToken = async({ token,userID }) => {
  if ( !token || !userID ) {
    throw new Error('Token : arguments missing...');
  }

  try {
    const userToken = await Token.findOne({
      where:{
        UserIdUser:userID
      }
    });

    if ( userToken ) {
      userToken.token = token;

      return await userToken.save();
    }

    return await Token.create({
      token,
      UserIdUser:userID
    });

  } catch(e) {
    throw e;
  }
}

module.exports = createOrUpdateToken;
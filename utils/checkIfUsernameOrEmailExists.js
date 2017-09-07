const
  { db:{ User } } = require('../models/models');

const checkIfUsernameOrEmailExists = async({ username,email }) => {
  try {
    const info = {
      usernameExists:false,
      emailExists:false
    };

    const checkUsername = await User.findOne({
      raw:true,
      where:{ username }
    });

    const checkEmail = await User.findOne({
      raw:true,
      where:{ email }
    });

    if ( checkUsername ) {
      info.usernameExists = true;
    }

    if ( checkEmail ) {
      info.emailExists = true;
    }

    return info;

  } catch(e) {
    throw e;
  }
}

module.exports = checkIfUsernameOrEmailExists;
const
  { db:{ User } } = require('../models/models');

const checkIfUsernameOrEmailExists = async({ username,email }) => {
  try {
    const checkUsername = await User.findOne({
      raw:true,
      where:{ username }
    });

    const checkEmail = await User.findOne({
      raw:true,
      where:{ email }
    });

    return {
      usernameExists:!!checkUsername,
      emailExists:!!checkUsername
    };
  } catch(e) {
    throw e;
  }
}

module.exports = checkIfUsernameOrEmailExists;
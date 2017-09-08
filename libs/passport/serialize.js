const
  { db:{ User,Role } } = require('../../models/models'),
  generateError        = require('../../utils/generateError');

const serializeUser = (user,done) => {
  return done(null,user.id_user);
}

const deserializeUser = async(id_user,done) => {
  try {
    const user = await User.findOne({
      raw:true,
      required:true,
      where:{
        id_user
      },
      attributes:['id_user','username','email','register_date','number_of_reports'],
      include:[{
        model:Role
      }]
    });

    user.role = user['Role.role'];

    return done(null,user);
  } catch(e) {
    return done(generateError('Something went wrong...'));
  }
}

module.exports = {
  serializeUser,
  deserializeUser
};
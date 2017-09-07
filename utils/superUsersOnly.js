const
  generateError = require('./generateError');

const
  { settings } = require('../config/config');

const superUsersOnly = async(req,res,next) => {
  if ( !req.isAuthenticated() || req.user.role.toUpperCase() !== 'ADMIN' ) {
    return next(generateError('Access denied',403));
  }

  const superUsers = await settings.getValue({
    setting:'SUPER_USERS',async:true
  });

  if ( !superUsers.split(',').includes(req.user.username) ) {
    return next(generateError('Access denied',403));
  }

  next();
}

module.exports = superUsersOnly;
const
  generateError = require('./generateError');

const allowAdminAccessOnly = (req,res,next) => {
  if ( !req.user || req.user.role.toLowerCase() !== 'admin' ) {
    return next(generateError('Permission denied...'),403);
  }

  next();
}

module.exports = allowAdminAccessOnly;
const
  checkIfAjaxRequest = require('../utils/checkIfAjaxRequest'),
  generateError      = require('../utils/generateError');

const redirectIfNotLoggedIn = (req,res,next) => {
  if ( !req.isAuthenticated() ) {
    if ( checkIfAjaxRequest(req) ) {
      return next(generateError('Not permitted',403));
    }
    
    return res.redirect('/login');
  }

  next();
}

module.exports = redirectIfNotLoggedIn;
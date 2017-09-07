const
  checkIfAjaxRequest = require('../utils/checkIfAjaxRequest'),
  generateError      = require('../utils/generateError');

const redirectIfLoggedIn = (req,res,next) => {
  if ( req.isAuthenticated() ) {
    if ( checkIfAjaxRequest(req) ) {
      return next(generateError('You are already logged in...'));
    }

    return res.redirect('/');
  }

  next();
}

module.exports = redirectIfLoggedIn;
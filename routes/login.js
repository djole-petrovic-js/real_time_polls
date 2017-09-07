const
  express  = require('express'),
  passport = require('passport'),
  csurf    = require('csurf'),
  router   = express.Router();

const
  redirectIfLoggedIn      = require('../utils/redirectIfLoggedIn'),
  saveSessionAndRedirect = require('../utils/saveSessionAndRedirect'),
  generateError          = require('../utils/generateError'),
  redirectIfNotLoggedIn  = require('../utils/redirectIfNotLoggedIn'); 

router.use(csurf({ cookie:true }));

router.get('/',redirectIfLoggedIn,(req,res,next) => {
  const errors = req.flash('errors');

  res.render('login',{
    csrfToken:req.csrfToken(),
    errors:errors && errors.length ? errors : [],
    title:'Log in'
  });
});

router.get('/logout',redirectIfNotLoggedIn,(req,res,next) => {
  req.logout();

  req.session.destroy((err) => {
    res.redirect('/');
  });
});

router.post('/login',redirectIfLoggedIn,(req,res,next) => {
  const passportOptions = {
    session:true,
    failureFlash:true
  };

  passport.authenticate('local',passportOptions,(err,user,info) => {
    if ( err ) {
      return next(generateError('Something went wrong, please try again...'));
    }

    if ( !user ) {
      req.flash('errors',info.message);

      return saveSessionAndRedirect(req,res,'/login');
    }

    req.login(user,(err) => {
      if ( err ) {
        return next(generateError('Something went wrong, please try again...'));
      }

      saveSessionAndRedirect(req,res,'/');
    });
  })(req,res,next);
})

module.exports = router;
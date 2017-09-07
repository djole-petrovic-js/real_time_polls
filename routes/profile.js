const
  express = require('express'),
  router  = express.Router();

const
  redirectIfNotLoggedIn = require('../utils/redirectIfNotLoggedIn');

router.use(redirectIfNotLoggedIn);

router.use((req,res,next) => {
  res.locals = {
    title:'Profile',
    user:req.user
  };

  next();
});

router.get('/',(req,res,next) => {
  res.render('profile');
});

module.exports = router;
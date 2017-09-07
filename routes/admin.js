const
  express = require('express'),
  router  = express.Router();

const
  allowAdminAccessOnly = require('../utils/allowAdminAccessOnly'),
  generateError        = require('../utils/generateError');

router.use(allowAdminAccessOnly);

router.get('/',(req,res,next) => {
  res.render('admin',{
    title:'Admin Panel',
    user:req.user
  });
});

module.exports = router;
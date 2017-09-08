const
  configEnv = require('./configEnv')();

const
  express      = require('express'),
  favicon      = require('serve-favicon'),
  logger       = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser   = require('body-parser'),
  flash        = require('connect-flash'),
  passport     = require('passport'),
  session      = require('express-session'),
  sessionStore = require('connect-session-sequelize')(session.Store),
  ioSession    = require('express-socket.io-session'),
  helmet       = require('helmet'),
  io           = require('socket.io')(),
  path         = require('path'),
  app          = express();
  
app.io = io;

const
  index     = require('./routes/index'),
  login     = require('./routes/login'),
  profile   = require('./routes/profile'),
  register  = require('./routes/register'),
  polls     = require('./routes/polls')(io),
  admin     = require('./routes/admin'),
  APIAdmin  = require('./routes/APIAdmin'),
  APIPublic = require('./routes/APIPublic');

const 
  { serializeUser,deserializeUser } = require('./libs/passport/serialize'),
  { connection }                    = require('./models/models'),
  generateError                     = require('./utils/generateError'),
  allowAdminAccessOnly              = require('./utils/allowAdminAccessOnly'),
  backups                           = require('./cron_jobs/backup/backups'),
  cleanExpiredAccounts              = require('./cron_jobs/cleanExpiredAccounts/cleanExpiredAccounts'),
  resetNumberOfReports              = require('./cron_jobs/resetNumberOfReports/resetNumberOfReports'),
  checkIfAjaxRequest                = require('./utils/checkIfAjaxRequest'),
  mainSettings                      = require('./config/config'),
  watchSettingsFile                 = require('./utils/watchSettingsFile'),
  passportLocalStrategy             = require('./libs/passport/strategy');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const sessionData = session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false,
  store: new sessionStore({
    db:connection
  }),
});

app.use(sessionData);
app.use(helmet());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session({ cookie:'meowz' }));

io.use(ioSession(sessionData));
passport.use(passportLocalStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.use('/login',login);

app.use((req,res,next) => {
  if ( mainSettings.SITE_MAINTENANCE !== 1 ) return next();

  if ( req.isAuthenticated() && req.user.role.toUpperCase() === 'ADMIN' ) {
    return next();
  }

  next(generateError('Site is currently being maintaned, please come back soon...',503));
});

app.use('/client_admin/*',allowAdminAccessOnly,(req,res,next) => {
  res.sendFile(path.join(__dirname,'client_admin',req.params[0]));
})

app.use('/register',register);
app.use('/profile',profile);
app.use('/admin',admin);
app.use('/polls',polls);
app.use('/api/public',APIPublic);
app.use('/api/admin',APIAdmin);
app.use('/',index);

app.use((req, res, next) => {
  const err = new Error('Not Found');

  err.status = 404;
  next(err);
});

app.use((err,req,res,next) => {
  if ( err.code !== 'EBADCSRFTOKEN' ) return next(err);

  next(generateError('Oops something went wrong...'));
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);

  if ( checkIfAjaxRequest(req) ) {
    res.json({
      message:err.message,
      error:req.app.get('env') === 'development' ? err : {}
    });
  } else {
    res.render('error');
  }
});

module.exports = app;
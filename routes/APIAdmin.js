const
  bluebird   = require('bluebird'),
  express    = require('express'),
  sequelize  = require('sequelize'),
  path       = require('path'),
  moment     = require('moment'),
  mysql      = require('mysql2'),
  fileUpload = require('express-fileupload'),
  router     = express.Router();

const
  { fs }                = require('../utils/promisifiedModules'),
  allowAdminAccessOnly = require('../utils/allowAdminAccessOnly'),
  passwordProtected    = require('../utils/passwordProtected'),
  superUsersOnly        = require('../utils/superUsersOnly'),
  generateLog           = require('../utils/generateLog'),
  checkIfAjaxRequest   = require('../utils/checkIfAjaxRequest'),
  trimObjectValues      = require('../utils/trimObjectValues'),
  getSortedBackups     = require('../utils/getSortedBackups'),
  makeUniqueDir        = require('../utils/makeUniqueDir'),
  deleteEntireFolder   = require('../utils/deleteEntireFolder'),
  generateError         = require('../utils/generateError'),
  Form                  = require('../libs/form'),
  Types                = require('../libs/types'),
  MainSettings         = require('../config/config');

const {
  connection:Sequelize,
  db:{
    User,Role,
    Poll,BannedEmail
  }
} = require('../models/models');

const {
  logsDirectory,
  backupsDirectory,
  defaultBackupName,
  mainSettingsPath,
  settings,
  mainSettingsBackupDir,
  defaultMainSettingsBackupName
} = require('../config/config');

router.use(allowAdminAccessOnly);

router.get('/getRoles',async(req,res,next) => {
  try {
    const roles = await Role.findAll();

    res.json(roles);
  } catch(e) {
    return next(generateError('Could not get roles, please try again...'));
  }
});





router.get('/getAllPolls',async(req,res,next) => {
  try {
    const polls = await Poll.findAll({
      include:[{
        model:User
      }],
      order:[['created_date','DESC']]
    });

    res.json(polls);
  } catch(e) {
    return next(generateError('Error while getting the polls...'));
  }
});



router.post('/enableDisablePoll',async(req,res,next) => {
  try {
    const { pollID } = req.body;

    const poll = await Poll.findById(pollID);

    if ( !poll ) {
      return next(generateError('Poll not found...')); 
    }

    const query = poll.is_active
      ? { is_active:false,closed_at:sequelize.literal('CURRENT_TIMESTAMP') }
      : {  is_active:true,closed_at:null };

    await Poll.update(query,{
      where:{
        id_poll:pollID
      }
    });

    res.json({
      success:true
    });

  } catch(e) {
    return next(generateError('Error while enabling/disabling the poll...'));
  }
});



router.post('/deletePoll',async(req,res,next) => {
  try {
    const { id_poll } = req.body;

    if ( !id_poll ) {
      return res.json({
        error:true,
        message:'ID poll missing...'
      });
    }

    await Poll.destroy({
      where:{ id_poll }
    });

    res.json({
      success:true
    });
      
  } catch(e) {
    return next(generateError('Could not delete this poll...'));
  }
});



router.get('/getUsers',async(req,res,next) => {
  try {
    let users = await User.findAll({
      required:true,
      attributes:[
        'id_user',
        'username',
        'email',
        'is_activated',
        'register_date',
        'RoleIdRole'
      ],
      include:[{
        model:Role
      }]
    });

    let superUsers = await settings.getValue({
      setting:'SUPER_USERS',
      async:true
    });

    superUsers = superUsers.split(',').map(x => x.trim());

    users = users.map(x => {
      const user = {
        user:x,
        canBeModified:false
      };

      if ( x.Role.role.toUpperCase() === 'USER' ) {
        user.canBeModified = true;

        return user;
      }

      if ( x.Role.role.toUpperCase() === 'ADMIN' ) {
        user.canBeModified = !!(
          superUsers.includes(req.user.username) && 
         !superUsers.includes(x.username)
        );
      }

      return user;
    });

    res.json(users);
  } catch(e) {
    return next(generateError('Could not get users, please try again'));
  }
});



router.post('/addAccount',async(req,res,next) => {
  try {
    req.body.user.register_date = sequelize.literal('CURRENT_TIMESTAMP');

    trimObjectValues(req.body.user);

    const { username,password,email } = req.body.user;

    const form = new Form({
      username,password,email
    });

    form
      .field('username')
      .validate('required','Username is empty...')
      .field('password')
      .validate('required','Password is empty')
      .field('email')
      .validate('required','Email is empty...')
      .validate('email','Email you provided is not an email...');

    if ( !form.isValid() ) {
      return res.json({
        error:true,
        message:'Incorrect data',
        errors:form.getOnlyFirstErrorForEachField()
      });
    }

    await User.create(req.body.user,{
      fields:[
        'username',
        'password',
        'email',
        'is_activated',
        'register_date',
        'RoleIdRole'
      ]
    });

    res.json({
      success:true
    });

  } catch(e) {
    return next(generateError('Could not create account...'));
  }
});





router.post('/updateUser',async(req,res,next) => {
  try {
    const { id_user,RoleIdRole } = req.body;

    if ( !id_user || !RoleIdRole ) {
      return res.json({
        error:true,
        message:'Data is missing...'
      });
    }

    const user = await User.findOne({
      where:{ id_user },
      include:[{ model:Role }]
    });

    if ( !user ) {
      return res.json({
        error:true,
        message:'User not found, refresh your users page...'
      });
    }

    if ( user.Role.role.toUpperCase() === 'ADMIN' ) {
      const superUsers = MainSettings.SUPER_USERS.split(',');
      
      if ( !superUsers.includes(req.user.username) ) {
        return res.json({
          error:true,
          message:'You dont have the permissions to update this user...'
        });
      }

      if ( superUsers.includes(user.username) ) {
        return res.json({
          error:true,
          message:'You can not update super user account...'
        });
      }
    }

    await User.update({
      RoleIdRole
    },{
      where:{ id_user }
    });

    res.json({
      success:true
    });

  } catch(e) {
    generateLog('users',e);

    return next(generateError('Error while updating user...'));
  }
});



router.post('/deleteUser',async(req,res,next) => {
  try {
    const { userID:id_user } = req.body;

    if ( !id_user || !Types.isNumber(id_user) || !Types.isString(id_user) ) {
      return next(generateError('User id is missing...'));
    }

    if ( id_user === req.user.id_user ) {
      return res.json({
        error:true,
        message:'You can not delete your account from here, check your profile page...'
      });
    }

    const user = await User.findOne({
      where:{ id_user },
      include:[{
        model:Role
      }]
    });

    if ( !user ) {
      return res.json({
        error:true,
        message:'User not found, refresh your users page...'
      });
    }

    if ( user.Role.role.toUpperCase() === 'ADMIN' ) {
      const superUsers = MainSettings.SUPER_USERS.split(',');
      
      if ( !superUsers.includes(req.user.username) ) {
        return res.json({
          error:true,
          message:'You dont have the permissions to delete this user...'
        });
      }

      if ( superUsers.includes(user.username) ) {
        return res.json({
          error:true,
          message:'You can not delete super user account...'
        });
      }
    }

    await Promise.all([
      BannedEmail.create({
        banned_email:user.email
      }),
      User.destroy({
        where:{ id_user:user.id_user }
      })
    ]);

    res.json({
      success:true
    });

  } catch(e) {
    console.log(e);
    return next(generateError('Could not delete user, please try again...'));
  }
});




router.get('/getLogs',async(req,res,next) => {
  try {
    const logs = await fs.readdirAsync(logsDirectory);

    res.json(logs);
  } catch(e) {
    generateLog('logs',e);

    return next(generateError('Error while getting logs...'));
  }
});


router.post('/getLogFile',async(req,res,next) => {
  const { log } = req.body;

  if ( !log ) {
    return next(generateError('Log file name is missing...'));
  }

  const logPath = path.join(logsDirectory,log);

  try {
    const stat = await fs.statAsync(logPath);

  } catch(e) {
    return next(generateError('Log file does not exist...'));
  }

  try {
    const content = await fs.readFileAsync(logPath,'utf-8');

    res.send(content);
  } catch(e) {
    return next(generateError('Could not get log...'));
  }
});




router.post('/clearLog',async(req,res,next) => {
  const 
    { logFile } = req.body,
    logPath     = path.join(logsDirectory,logFile);

  try {
    const stat = await fs.statAsync(logPath);

    if ( !stat.isFile() ) {
      return next(generateError('Log not found...'));
    }

  } catch(e) {
    return next(generateError('Log not found...'));
  }

  try {
    await fs.writeFile(logPath,`Cleared on : ${ new Date().toUTCString() }`,'utf-8');

    res.json({
      success:true
    });

  } catch(e) {
    return next(generateError('Could not clear log...'));
  }
});



router.get('/getBackups',async(req,res,next) => {
  try {
    const backups = await getSortedBackups(backupsDirectory);

    res.json(backups);
  } catch(e) {
    console.log(e);
    return next(generateError('Could not get backups...'));
  }
});




router.post('/downloadBackup',superUsersOnly,passwordProtected,async(req,res,next) => {
  try {
    const { backupName } = req.body;

    if ( !backupName ) {
      generateLog('db_backup','Download backup was unsuccessfull, backup name is missing...');

      return res.json({
        error:true,
        message:'db backup name is missing.'
      });
    }

    const backupFilePath = path.join(
      backupsDirectory,backupName,defaultBackupName
    );

    const stat = await fs.statAsync(backupFilePath);

    if ( !stat.isFile() ) {
      return next(generateError('File is missing...'));
    }

    //success:true : file exists and is ready for download...
    if ( checkIfAjaxRequest(req) ) {
      res.json({
        success:true
      });
    } else {
      res.download(backupFilePath);
    }

  } catch(e) {
    return next(generateError('Could not download backup...'));
  }
});




router.post('/uploadBackup',fileUpload(),superUsersOnly,passwordProtected,async(req,res,next) => {
  try {
    const backup = req.files && req.files.file;

    if ( !backup ) {
      return res.json({
        error:true,
        message:'Backup file is missing...'
      });
    }

    if ( backup.mimetype !== 'application/sql' ) {
      return res.json({
        error:true,
        message:'Not an sql backup file, please upload correct file...'
      });
    }

    const destination = await makeUniqueDir({
      src:backupsDirectory,
      prefix:'backup_'
    });

    const upload = bluebird.promisify(backup.mv);
    
    await upload(path.join(destination,defaultBackupName));

    return res.json({
      success:true
    });

  } catch(e) {
    generateLog('db_backup',e);

    return next(generateError('Could not upload backup...'));
  }
});




router.post('/applyBackup',superUsersOnly,passwordProtected,async(req,res,next) => {
  const { backupName } = req.body;

  if ( !backupName ) {
    generateLog('db_backup','backup name is missing');

    return next(generateError('Backup name is missing'));
  }

  const 
    backupDir  = path.join(backupsDirectory,backupName),
    backupFile = path.join(backupsDirectory,backupName,defaultBackupName);

  try {
    const 
      statDir  = await fs.statAsync(backupDir),
      statFile = await fs.statAsync(backupFile);

    if ( !statDir.isDirectory() || !statFile.isFile() ) {
      generateLog('db_backup','backup directory or backup file is missing');

      return next(generateError('Backup directory or file is missing...'));
    } 

  } catch(e) {
    generateLog('db_backup',e);

    return next(generateError('Could not apply backup...'));
  }

  const connection = bluebird.promisifyAll(mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    multipleStatements:true
  }));

  try {
    await Sequelize.drop()

    connection.connect();

    const query = await fs.readFileAsync(backupFile,'utf-8');

    await connection.queryAsync(
      'set foreign_key_checks=0;' + query + 'set foreign_key_checks=1;'
    );

    res.json({
      success:true
    });

  } catch(e) {
    generateLog('db_backup',e);

    next(generateError('Could not backup script against the database...'));
  } finally {
    connection.end();
  }
});



router.post('/deleteBackup',passwordProtected,async(req,res,next) => {
  try {
    const { backupName } = req.body;

    if ( !backupName ) {
      return res.json({
        error:true,
        message:'Backup name is missing...'
      });
    }

    const backupPath = path.join(backupsDirectory,backupName);

    const stat = await fs.statAsync(backupPath);

    if ( !stat.isDirectory() ) {
      return next(generateError('Backup directory not found...'));
    }

    await deleteEntireFolder(backupPath);

    return res.json({
      success:true
    });

  } catch(e) {
    generateLog('db_backup',e);

    return next(generateError('Could not delete backup...'));
  }
});


/*
  Configuration Routes.
*/


router.get('/getMainSettings',async(req,res,next) => {
  try {
    const mainSettings = await settings.getAllSettings(true);

    res.json({
      settings:mainSettings,
      canChangeSettings:MainSettings.SUPER_USERS.split(',').includes(req.user.username)
    });

  } catch(e) {
    return next(generateError('Could not get main config...'));
  }
});



router.get('/getMainSettingsBackups',async(req,res,next) => {
  try {
    const backups = await getSortedBackups(mainSettingsBackupDir);

    res.json({
      backups
    });
  } catch(e) {
    return next(generateError('Could not get settings backups...'));
  }
});




router.post('/uploadSettings',fileUpload(),passwordProtected,superUsersOnly,async(req,res,next) => {
  try {
    const settingsFile = req.files && req.files.file;

    if ( !settingsFile ) {
      return res.json({
        error:true,
        message:'Settings file is missing...'
      });
    }

    const dest = await makeUniqueDir({
      src:mainSettingsBackupDir,
      prefix:'main_settings_backup_'
    });

    const mv = bluebird.promisify(settingsFile.mv);

    await mv(path.join(dest,defaultMainSettingsBackupName));

    res.json({
      success:true,
      backupName:dest.slice(dest.lastIndexOf('/') + 1)
    });

  } catch(e) {
    return next(generateError('Could not upload this settings, please check logs...'));
  }
});




router.post('/applyMainSettingsBackup',superUsersOnly,passwordProtected,async(req,res,next) => {
  try {
    const { backupName } = req.body;

    if ( !backupName ) {
      return res.json({
        error:true,
        message:'Backup name is missing...'
      });
    }

    const backupPath = path.join(
      mainSettingsBackupDir,backupName,defaultMainSettingsBackupName
    );

    const stat = await fs.statAsync(backupPath);

    if ( !stat.isFile() ) {
      return res.json({
        error:true
      });
    }

    const backupContent = await fs.readFileAsync(backupPath,'utf-8');

    await fs.writeFileAsync(mainSettingsPath,backupContent,{
      encoding:'utf-8',
      flag:'w'
    });

    res.json({
      success:true
    });

  } catch(e) {
    generateLog('main_backup',e);

    return next(generateError('Could not apply this backup...'));
  }
});



router.post('/changeSetting',superUsersOnly,passwordProtected,async(req,res,next) => {
  try {
    const { settingsName }  = req.body;
    let   { settingsValue } = req.body;
    
    if ( !settingsName || !settingsValue ) {
      return res.json({
        error:true,
        message:!settingsName
          ? 'Settings name is missing'
          : 'Value for the setting is missing...'
      });
    }

    const currentSetting = settings.getValue(settingsName);

    if ( !isNaN(settingsValue) ) {
      settingsValue = Number(settingsValue);
    }

    if ( currentSetting === settingsValue ) {
      return res.json({
        error:true,
        message:'Value you provided is already in the settings...'
      });
    }

    if ( currentSetting === null ) {
      return res.json({
        error:true,
        message:'Setting you wanted to change doesnt exist...'
      });
    }

    if ( [0,1].includes(currentSetting) && ![0,1].includes(settingsValue) ) {
      return res.json({
        error:true,
        message:'Only 0 or 1 values are allow for this setting...'
      });
    }

    if ( settingsName === 'SUPER_USERS' ) {
      const 
        superUsers    = settings.getValue('SUPER_USERS').split(','),
        newSuperUsers = settingsValue.split(',');

      if ( !superUsers.every(x => newSuperUsers.includes(x)) ) {
        return res.json({
          error:true,
          message:'You cannot modify super users list, you can only append to it...'
        });
      }

      for ( const superUserCandidate of newSuperUsers.slice(superUsers.length) ) {
        const candidate = await User.findOne({
          where:{
            username:superUserCandidate,
          },
          include:[{
            model:Role
          }]
        });
        
        if ( !candidate ) {
          return res.json({
            error:true,
            message:`
              User ${superUserCandidate} is not found, please make sure
              to type right username...
            `
          });
        }

        if ( candidate.Role.role.toUpperCase() !== 'ADMIN' ) {
          return res.json({
            error:true,
            message:`User ${superUserCandidate} is not an administrator...`
          });
        }
      }
    }

    MainSettings[settingsName] = settingsValue;

    settings.saveSetting(settingsName,settingsValue);

    res.json({
      success:true
    });

  } catch(e) {
    generateLog('settings',e);

    return next(generateError('Could not change this setting...'));
  }
});




router.post('/deleteMainSettingsBackup',superUsersOnly,passwordProtected,async(req,res,next) => {
  try {
    const { backupName } = req.body;

    if ( !backupName ) {
      return res.json({
        error:true,
        message:'Backup name is missing...'
      });
    }

    const backupPath = path.join(mainSettingsBackupDir,backupName);

    const stat = await fs.statAsync(backupPath);

    if ( !stat.isDirectory() ) {
      return res.json({
        error:true,
        message:'Backup name you provided doesnt exist...'
      });
    }

    await deleteEntireFolder(backupPath);

    res.json({
      success:true
    });

  } catch(e) {
    generateLog('main_backup',e);

    return next(generateError('Could not delete this backup...'));
  }
});



module.exports = router;
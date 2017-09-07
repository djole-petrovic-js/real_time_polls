const
  path       = require('path'),
  cron      = require('node-cron'),
  mysqldump = require('mysqldump');

const
  deleteExpiredBackups = require('../../utils/deleteExpiredBackups'),
  makeUniqueDir        = require('../../utils/makeUniqueDir'),
  generateLog           = require('../../utils/generateLog'),
  copyFile              = require('../../utils/copyFile'),
  { fs }                = require('../../utils/promisifiedModules');

const {
  SQLBackups,
  backupsDirectory,
  defaultMainSettingsBackupName,
  defaultBackupName,
  backupCounterFile,
  mainSettingsPath,
  mainSettingsBackupDir,
  mainSettingsBackups,
} = require('../../config/config')

const task = cron.schedule('0 0 * * *',async() => {
  let destination,mainSettingsDest;

  try {
    destination = await makeUniqueDir({
      src:backupsDirectory,
      prefix:'backup_'
    });

    mainSettingsDest = await makeUniqueDir({
      src:mainSettingsBackupDir,
      prefix:'main_settings_backup_'
    });
  } catch(e) {
    return generateLog('db_backup',e);
  }

  try {
    await deleteExpiredBackups([
      [backupsDirectory,SQLBackups],
      [mainSettingsBackupDir,mainSettingsBackups]
    ]);
  } catch(e) {
    generateLog('db_backup',e);
    generateLog('main_backup',e);
  }

  try {
    await copyFile({
      src:mainSettingsPath,
      dest:path.join(mainSettingsDest,defaultMainSettingsBackupName)
    });
  } catch(e) {
    generateLog('main_backup',e);
  }

  mysqldump({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    dest:path.join(destination,defaultBackupName)
  },(err) => {
    if ( err ) {
      return generateLog('db_backup',err);
    }
  });
},false);

task.start();

module.exports = task;
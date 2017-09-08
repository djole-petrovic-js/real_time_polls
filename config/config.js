const
  nodeMailer = require('nodemailer'),
  fs          = require('fs'),
  path        = require('path');

const  Settings = require('../libs/settings');

const config = {};

const siteName = 'RTP';

const mainSettingsPath = path.join(__dirname,'main_settings');

const mainSettingsBackupDir = path.join(__dirname,'../','main_config_backup');

const settings = new Settings(mainSettingsPath,mainSettingsBackupDir);

settings
  .getAllSettings()
  .map(x => x.split('='))
  .forEach(([key]) => config[key] = settings.getValue(key));

const logsDirectory = path.join(__dirname,'../','logs');

const backupsDirectory = path.join(__dirname,'../','backups');

const backupCounterFile = path.join(__dirname,'../','cron_jobs','backup','backups_counter');

const defaultBackupName = 'backup.sql';

const defaultMainSettingsBackupName = 'main_settings.backup';

const limitLatestPolls = 4;

const limitMostPopularPolls = 4;

const maxPollsPerUser = 10;

const pollsPerPage = 4;

//period in days
const accountExpiration = 7;

//period in days
const tokenExpiration = 7;

//period in days
const minUsernameChangePeriod = 100;

//period in days
const minPasswordChangePeriod = 100;

const maxReportsPerUserPerMonth = 20;

const reportsForBlockingPoll = 20;

const usernameRegex = /^[a-zA-Z0-9_\-]{5,20}$/g;

const passwordRegex = /^[a-zA-Z0-9_\-]{5,20}$/g;

const SQLBackups = 10;

const mainSettingsBackups = 10;

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

Object.assign(config,{
  siteName,
  mainSettingsPath,
  settings,
  logsDirectory,
  backupsDirectory,
  mainSettingsBackupDir,
  backupCounterFile,
  defaultBackupName,
  defaultMainSettingsBackupName,
  limitLatestPolls,
  limitMostPopularPolls,
  maxPollsPerUser,
  pollsPerPage,
  accountExpiration,
  tokenExpiration,
  minUsernameChangePeriod,
  minPasswordChangePeriod,
  maxReportsPerUserPerMonth,
  reportsForBlockingPoll,
  usernameRegex,
  passwordRegex,
  SQLBackups,
  mainSettingsBackups,
  transporter
});

module.exports = config;
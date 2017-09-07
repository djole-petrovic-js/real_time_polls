const
  cron = require('node-cron'),
  moment = require('moment'); 

const {
  db:{
    User,BannedEmail
  }
} = require('../../models/models');

const
  { accountExpiration } = require('../../config/config'),  
  generateLog           = require('../../utils/generateLog');

const task = cron.schedule('0 0 * * *',async() => {
  const expiredAccounts = [];

  try {
    expiredAccounts.push(...await User.findAll({
      raw:true,
      where:{
        is_activated:false
      }
    }));
  } catch(e) {
    return await generateLog('cleanExpiredAccounts',e);
  }

  const now = moment().utc(1).toISOString();

  const emails = expiredAccounts.filter(
    acc => moment(now).diff(acc.register_date,'days') >= accountExpiration
  ).map(({ email }) => email);

  if ( emails.length === 0 ) return;

  try {
    await Promise.all([
      User.destroy({
        where:{ email:emails }
      }),
      BannedEmail.bulkCreate(emails.map(x => ({
        banned_email:x
      })))
    ]);
  } catch(e) {
    await generateLog('cleanExpiredAccounts',e)
  }
},false);

task.start();

module.exports = task;
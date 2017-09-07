const
  moment = require('moment'),
  path   = require('path');

const
  { fs } = require('./promisifiedModules');

const getSortedBackups = async(src,order = 'DESC') => {
  try {
    const 
      allDirs = await fs.readdirAsync(src),
      backups  = [];

    for ( const dir of allDirs ) {
      const { birthtime } = await fs.statAsync(path.join(src,dir));

      backups.push({
        dir,
        birthtime
      });
    }

    backups.sort((b1,b2) => {
      const
        birthtime1 = moment(b1.birthtime).utc(1).toISOString(),
        birthtime2 = moment(b2.birthtime).utc(1).toISOString();

      return order.toUpperCase() === 'DESC' 
        ? moment(birthtime2).diff(birthtime1,'seconds')
        : moment(birthtime1).diff(birthtime2,'seconds')
    })

    return backups;
  } catch(e) {
    throw e;
  }
}

module.exports = getSortedBackups;
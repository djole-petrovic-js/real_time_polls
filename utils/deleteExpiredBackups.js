const
  path = require('path');

const 
  deleteEntireFolder = require('./deleteEntireFolder'),
  getSortedBackups   = require('./getSortedBackups');

const deleteExpiredBackups = async(optsArray) => {
  try {
    for ( const [src,limit] of optsArray ) {
      const backups = await getSortedBackups(src,'ASC');

      if ( backups.length <= limit ) continue;

      let
        len = backups.length - limit,
        i   = 0;

      for ( ; i < len ; i++ ) {
        await deleteEntireFolder(
          path.join(src,backups[i].dir)
        );
      }
    }
  } catch(e) {
    throw e;
  }
}

module.exports = deleteExpiredBackups;
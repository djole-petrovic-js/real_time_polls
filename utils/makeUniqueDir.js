const
  path = require('path');

const
  { backupCounterFile } = require('../config/config'),
  { fs } = require('./promisifiedModules');

const makeUniqueDir = async({ src,prefix }) => {
  try {
    const dirNum = Number(await fs.readFileAsync(backupCounterFile));

    const destination = path.join(src,prefix + dirNum);

    await fs.mkdirAsync(destination);    

    await fs.writeFileAsync(backupCounterFile,dirNum + 1,'utf-8');

    return destination;
  } catch(e) {
    throw e;
  }
}

module.exports = makeUniqueDir;
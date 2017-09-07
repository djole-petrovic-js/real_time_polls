const
  { logsDirectory } = require('../config/config'),
  { fs }            = require('../utils/promisifiedModules'),
  path               = require('path');

const
  Types = require('../libs/types');

const generateLog = async(...args) => {
  if ( args.length === 0 ) {
    throw new Error('Generate Log : arguments missing...');
  }

  let logFile,message;

  if ( Types.isObject(args[0]) ) {
    ({ logFile,message } = args[0]);
  } else {
    [ logFile,message ] = args;
  }

  try {
    const logPath = path.join(logsDirectory,logFile + '.log');

    const content = `
      **********************
      ${ new Date().toUTCString() }
      ${ message }
      ----------------------
      \n
    `;

    await fs.writeFileAsync(logPath,content,{
      flag:'a',
      encoding:'utf-8'
    });
    

  } catch(e) { }
}

module.exports = generateLog;
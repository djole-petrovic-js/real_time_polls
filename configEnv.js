const 
  fs   = require('fs'),
  path = require('path');

const configEnv = () => {
  const envPath = path.join(__dirname,'.env');

  try {
    if ( !fs.statSync(envPath).isFile() ) {
      throw new Error('.env is not a file...');
    }
  } catch(e) {
    throw new Error('.env file is missing from root directory...');
  }

  fs
    .readFileSync(envPath,'utf-8')
    .split('\n')
    .filter(x => x && x !== '')
    .map(x => x.trim() && x.split('='))
    .forEach(x => {
      if ( !x || x.length !== 2 ) {
        throw new Error('Expected key=value format, check your .env file format...');
      }

      const [ key,value ] = x;

      process.env[key] = process.env[key] || value;
    });
}

module.exports = configEnv;
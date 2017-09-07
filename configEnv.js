const 
  fs   = require('fs'),
  path = require('path');

const configEnv = () => {
  fs
    .readFileSync(path.join(__dirname,'.env'),'utf-8')
    .split('\n')
    .filter(x => x && x !== '')
    .map(x => x.trim() && x.split('='))
    .forEach(([key,value]) => {
      process.env[key] = process.env[key] || value;
    });
}

module.exports = configEnv;
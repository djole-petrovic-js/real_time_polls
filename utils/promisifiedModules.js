const
  bluebird = require('bluebird');

const
  bcrypt = require('bcrypt-nodejs'),
  fs     = require('fs');

const allExports = {};

const promisifiedModules = [{
  name:'bcrypt',
  module:bcrypt
},{
  name:'fs',
  module:fs
}];

promisifiedModules
  .map(({ name,module }) => ({ name,module:bluebird.promisifyAll(module) }))
  .forEach(({ name,module }) => {
    allExports[name] = module;
  });

module.exports = allExports;
const 
  Types = require('../libs/types');

const trimObjectValues = (obj) => {
  if ( !obj ) {
    throw new Error('Trim obj values : object is missing...');
  }

  if ( !Types.isObject(obj) ) {
    throw new Error('Trim obj values : not an object...');
  }

  for ( const [key,value] of Object.entries(obj) ) {
    if ( Types.isString(value) ) {
      obj[key] = value.trim();
    }
  }
}

module.exports = trimObjectValues;
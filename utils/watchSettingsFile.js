const
  fs   = require('fs'),
  path = require('path');

const
  { mainSettingsPath,settings } = require('../config/config'),
  generateLog                   = require('./generateLog');

fs.watch(mainSettingsPath,async(eventType,fileName) => {
  const config = require('../config/config');

  settings
    .getAllSettings()
    .map(x => x.split('='))
    .forEach(([key]) => config[key] = settings.getValue(key));

  await generateLog('main_settings','Main settings file has been changed...');
}); 
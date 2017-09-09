const
  Types  = require('../libs/types'),
  { fs } = require('../utils/promisifiedModules');

class Settings {
  constructor(mainSettingsPath,backupsPath) {
    this.mainSettingsPath = mainSettingsPath;
    this.backupsPath = backupsPath;

    Settings.addNewInstance();

    if ( Settings.numOfInstances > 1 ) {
      throw new Error('Settings class is a singelton, you can create only one instance...');
    }
  }

  getValue(...opts) {
    let setting,async;

    if ( Types.isObject(opts[0]) ) {
      ({ setting,async = false } = opts[0]);
    } else {
      [ setting,async ] = opts;
    }

    if ( !setting ) {
      return null;
    }

    const resolveValue = (allSettings) => {
      const 
        index = allSettings.findIndex(x => x.split('=')[0] === setting),
        value = index !== -1 ? allSettings[index].split('=')[1] : null;

      return value === null ? value : !isNaN(+value) ? +value : value;
    }

    if ( async ) {
      return new Promise(async(resolve,reject) => {
        const allSettings = await this.getAllSettings(true);

        resolve(resolveValue(allSettings));
      });
    }

    return resolveValue(this.getAllSettings());
  }

  saveSetting(...opts){
    let setting,value;

    if ( Types.isObject(opts[0]) ) {
      ({ setting,value } = opts[0]);
    } else {
      [ setting,value ] = opts;
    }

    const
      allSettings = this.getAllSettings(),
      index       = allSettings.findIndex(x => x.split('=')[0] === setting);

    if ( index === -1 ) {
      throw new Error('Setting not found in settings file...');
    }

    allSettings[index] = setting + '=' + value;

    fs.writeFileSync(this.mainSettingsPath,allSettings.join('\n'),'utf-8');
  }

  //get info from settings as Array : KEY=VALUE
  getAllSettings(async = false) {
    if ( async ) {
      return new Promise(async(resolve,reject) => {
        try {
          const settings = await fs.readFileAsync(this.mainSettingsPath,'utf-8');

          resolve(settings.split('\n'));
        } catch(e) {
          reject(e);
        }
      });
    } else {
      return fs
        .readFileSync(this.mainSettingsPath,'utf-8')
        .split('\n');
    }
  }

  // never used...
  async getBackups() {
    try {
      return await fs.readdirAsync(this.backupsPath);
    } catch(e) {
      throw e;
    }
  }

  static addNewInstance() {
    Settings.numOfInstances = Settings.numOfInstances || 0;
    Settings.numOfInstances++;
  }
}

module.exports = Settings;
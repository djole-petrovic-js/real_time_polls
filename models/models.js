const
  sequelize = require('sequelize'),
  path       = require('path'),
  fs         = require('fs');

const
  generateLog = require('../utils/generateLog');

const connection = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect:'mysql',
    logging:false
  }
);

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => file !== '.' && file !== '..' && file !== 'models.js')
  .map(file => file.replace('.js',''))
  .forEach(model => {
    db[model] = connection.import(path.join(__dirname,model));
  });

Object.keys(db).forEach(model => db[model].associate && db[model].associate(db));

connection.sync()
  .then(async() => {
    const userRole = await db.Role.findOrCreate({
      where:{
        role:'user'
      }
    });

    const adminRole = await db.Role.findOrCreate({
      where:{
        role:'admin'
      }
    });

    return true;
  })
  // .then(async() => {
  //   const user = await db.User.create({
  //     username:'djole',
  //     password:process.env.DB_PASSWORD,
  //     email:'djolescarface@gmail.com',
  //     is_activated:true,
  //     RoleIdRole:2
  //   });

  //   await db.User.create({
  //     username:'kvek',
  //     password:'kvek',
  //     email:'kvek@gmail.com',
  //     is_activated:true,
  //     RoleIdRole:1
  //   });

  //   return user;
  // })
  .then(async() => {
    //await generateLog('database','Successfully connected to database...');
  })
  .catch(async(err) => {
    await generateLog('fatal_errors',err);
    process.exit();
  });

module.exports = {
  connection,
  db
};
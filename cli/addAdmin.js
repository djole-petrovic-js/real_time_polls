#!/usr/bin/env node

const
  path      = require('path'),
  configEnv = require(path.join(__dirname,'../','configEnv'))();

const
  readline = require('readline'),
  bluebird = require('bluebird'),
  mysql    = require('mysql2'),
  bcrypt   = bluebird.promisifyAll(require('bcrypt-nodejs'));

const
  Password = require('../libs/Password');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

const getInput = (question) => {
  return new Promise((resolve,reject) => {
    rl.question(question,(input) => {
      resolve(input);
    });
  });
}

rl.question('Enter Username\n',async(username) => {
  const 
    password = await getInput('Enter Password\n'),
    email    = await getInput('Enter email \n');

  const connection = bluebird.promisifyAll(mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    multipleStatements:true
  }));

  let adminRoleId = 1;
  
  try {
    const insertRole = `
      INSERT INTO Role(role)
      VALUES('admin');
    `;

    await connection.queryAsync(insertRole);
  } catch(e) {
    try {
      [{ id_role:adminRoleId }] = await connection.queryAsync(`
        SELECT id_role
        FROM Role
        WHERE role = 'admin'
      `);
    } catch(e) {
      connection.end();
      rl.write('Error initializing admin role...\n');
      rl.close();
    }
  }

  try {
    const hash = await Password.hash(password);

    const addAdmin = `
      INSERT INTO User(username,password,email,register_date,is_activated,RoleIdRole)
      VALUES('${ username }','${ hash }','${ email }',now(),1,${ adminRoleId });
    `;

    await connection.queryAsync(addAdmin);

    rl.write('Successfully created...\n');
  } catch(e) {
    rl.write('Error while create roles and admin account...\n');
    rl.write(e);
  } finally {
    connection.end();
    rl.close();
  }
});
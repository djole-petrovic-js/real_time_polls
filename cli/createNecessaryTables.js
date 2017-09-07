const
  path       = require('path'),
  configEnv = require(path.join(__dirname,'../','configEnv'))();

const
  bluebird = require('bluebird'),
  mysql    = require('mysql2'),
  fs        = require('fs'),
  readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.question('Proceed with creating tables? (y/n)\n',async(answer) => {
  if ( answer !== 'n' && answer !== 'y' ) {
    rl.write('Enter y or n...\n');
    
    return rl.close();
  }

  if ( answer === 'n' ) {
    return rl.close();
  }

  const connection = bluebird.promisifyAll(mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    multipleStatements:true
  }));

  connection.connect();

  const queriesPath = path.join(__dirname,'queries');

  const combinedQueries = [
    'createRoleTable.sql',
    'createSessionsTable.sql',
    'createUsersTable.sql'
  ].map(x => fs.readFileSync(path.join(queriesPath,x),'utf-8')).join('');

  try {
    await connection.queryAsync(combinedQueries);

    rl.write('Successfully created\n');
  } catch(e) {
    rl.write('Failed to create tables...\n');
  } finally {
    connection.end();
    rl.close();
  }
});
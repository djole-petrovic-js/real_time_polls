const checkForEmptyFieldsAndPasswordsMatch = (userOpts) => {
  const { username,password,confirmPassword,email } = userOpts;
  const errors = [];

  if ( !username ) errors.push('Username is required...');
  if ( !password ) errors.push('Password is required...');
  if ( !email ) errors.push('Email is required...');

  if ( errors.length ) {
    return errors;
  }

  if ( password !== confirmPassword ) {
    errors.push('Passwords doesn\'t match...');
  }

  return errors;
}

module.exports = checkForEmptyFieldsAndPasswordsMatch;
const
  Form = require('../libs/form');

const {
  usernameRegex,
  passwordRegex
} = require('../config/config');

const validateRegisterForm = async(userOpts) => {
  const form = new Form(userOpts);

  form
    .field('username')
    .validate('required','Username is required...')
    .validate('minlength',5,'Username must have a least 5 characters...')
    .validate('maxlength',20,'Username is too long...')
    .validate('regex',usernameRegex,'Username is not properly formated...');

  form
    .field('password')
    .validate('required','Password is required')
    .validate('minlength',8,'Password must have a least 8 characters...')
    .validate('maxlength',20,'Password is too long...')
    .validate('regex',passwordRegex,'Password is not properly formated');

  form
    .field('email')
    .validate('required','Email is required')
    .validate('email','Not an email...')

  return form;
}

module.exports = validateRegisterForm;
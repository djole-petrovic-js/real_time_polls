const
  bluebird          = require('bluebird'),
  { transporter } = require('../config/config');

const
  nodeMail = bluebird.promisifyAll(transporter);

const sendVerificationEmail = async({ to,token }) => {
  const mailOptions = {
    from:'djolescarface@gmail.com',
    to,
    subject:'Verify your account',
    html:`
      <h1>Kvek</h1>
      <p>Click link below to verify your account</p>
      <a href="http://localhost:3000/register/confirm_registration?token=${ token }">
        Click here
      </a>
    `
  };

  try {
    const info = await nodeMail.sendMail(mailOptions);
    console.log(info);
    return info;
  } catch(e) { console.log(e);
    throw e;
  }
}

module.exports = sendVerificationEmail;
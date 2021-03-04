const speakeasy = require('speakeasy');
module.exports = {
  verify: (secret, token) => {
    return speakeasy.totp.verify({ secret, encoding: 'base32', token });
  }
};
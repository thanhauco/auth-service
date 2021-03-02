const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
module.exports = {
  setup: async () => {
    const secret = speakeasy.generateSecret();
    const url = await qrcode.toDataURL(secret.otpauth_url);
    return { secret: secret.base32, url };
  }
};
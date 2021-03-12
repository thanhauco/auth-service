const Provider = require('oidc-provider');
const configuration = {
  clients: [{ client_id: 'foo', client_secret: 'bar', redirect_uris: ['http://localhost:8080/cb'] }],
};
const oidc = new Provider('http://localhost:3000', configuration);
module.exports = oidc;
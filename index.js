const oidc = require('./src/services/oidc');
app.use('/oidc', oidc.callback());
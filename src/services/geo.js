const geoip = require('geoip-lite');
module.exports = (ip) => geoip.lookup(ip);
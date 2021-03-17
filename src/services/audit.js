const fs = require('fs');
module.exports = (action, user) => {
    fs.appendFileSync('audit.log', `${new Date().toISOString()} ${user} ${action}\n`);
};
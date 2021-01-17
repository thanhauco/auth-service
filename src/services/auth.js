const bcrypt = require('bcrypt');
const User = require('../models/user');
module.exports = {
  register: async (email, password) => {
    const hash = await bcrypt.hash(password, 10);
    User.create({ email, password: hash });
  }
};
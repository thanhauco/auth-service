const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const SECRET = 'secret';
module.exports = {
  register: async (email, password) => {
    const hash = await bcrypt.hash(password, 10);
    User.create({ email, password: hash });
  },
  login: async (email, password) => {
    const user = User.find(email);
    if (!user || !await bcrypt.compare(password, user.password)) throw new Error('Invalid credentials');
    return jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  }
};
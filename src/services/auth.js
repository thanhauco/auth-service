const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const SECRET = 'secret';
const REFRESH_SECRET = 'refresh';
const refreshTokens = [];
module.exports = {
  register: async (email, password) => {
    const hash = await bcrypt.hash(password, 10);
    User.create({ email, password: hash });
  },
  login: async (email, password) => {
    const user = User.find(email);
    if (!user || !await bcrypt.compare(password, user.password)) throw new Error('Invalid credentials');
    const token = jwt.sign({ email }, SECRET, { expiresIn: '15m' });
    const refresh = jwt.sign({ email }, REFRESH_SECRET);
    refreshTokens.push(refresh);
    return { token, refresh };
  },
  refresh: (token) => {
    if (!refreshTokens.includes(token)) throw new Error('Invalid token');
    const user = jwt.verify(token, REFRESH_SECRET);
    return jwt.sign({ email: user.email }, SECRET, { expiresIn: '15m' });
  }
};
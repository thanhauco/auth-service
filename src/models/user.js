const users = [];
module.exports = {
  find: (email) => users.find(u => u.email === email),
  create: (user) => users.push(user)
};
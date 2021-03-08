const session = require('express-session');
const RedisStore = require('connect-redis')(session);
// ... setup session middleware
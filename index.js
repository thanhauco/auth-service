const express = require('express');
const rateLimit = require('express-rate-limit');
const auth = require('./src/services/auth');
const authMiddleware = require('./src/middleware/auth');
const validate = require('./src/middleware/validate');
const app = express();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
app.use(express.json());
// ... rest
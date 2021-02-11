const express = require('express');
const auth = require('./src/services/auth');
const authMiddleware = require('./src/middleware/auth');
const validate = require('./src/middleware/validate');
const app = express();
app.use(express.json());
app.post('/register', validate, async (req, res) => {
  try {
    await auth.register(req.body.email, req.body.password);
    res.status(201).send('Created');
  } catch (e) { res.status(400).send(e.message); }
});
// ... rest
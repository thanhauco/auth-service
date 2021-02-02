const express = require('express');
const auth = require('./src/services/auth');
const authMiddleware = require('./src/middleware/auth');
const app = express();
app.use(express.json());
app.post('/register', async (req, res) => {
  try {
    await auth.register(req.body.email, req.body.password);
    res.status(201).send('Created');
  } catch (e) { res.status(400).send(e.message); }
});
app.post('/login', async (req, res) => {
  try {
    const token = await auth.login(req.body.email, req.body.password);
    res.json({ token });
  } catch (e) { res.status(401).send(e.message); }
});
app.get('/profile', authMiddleware, (req, res) => res.json(req.user));
app.listen(3000, () => console.log('Listening on 3000'));
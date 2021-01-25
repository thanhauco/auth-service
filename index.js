const express = require('express');
const auth = require('./src/services/auth');
const app = express();
app.use(express.json());
app.post('/register', async (req, res) => {
  try {
    await auth.register(req.body.email, req.body.password);
    res.status(201).send('Created');
  } catch (e) { res.status(400).send(e.message); }
});
app.listen(3000, () => console.log('Listening on 3000'));
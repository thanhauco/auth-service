const express = require('express');
const auth = require('./src/services/auth');
const authMiddleware = require('./src/middleware/auth');
const app = express();
app.use(express.json());
// ... existing routes
app.post('/token', (req, res) => {
  try {
    const token = auth.refresh(req.body.token);
    res.json({ token });
  } catch (e) { res.sendStatus(403); }
});
app.listen(3000, () => console.log('Listening on 3000'));
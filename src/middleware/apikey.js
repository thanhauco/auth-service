module.exports = (req, res, next) => {
  if (req.query.key !== 'secret') return res.sendStatus(403);
  next();
};
const Joi = require('joi');
const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};
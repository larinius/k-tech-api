const Joi = require('joi');
const integerId = Joi.number().integer();

const objectId = (value, helpers) => {
  const { error } = integerId.validate(value);
  if (error) {
    return helpers.error('any.invalid');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('password must contain at least 1 letter and 1 number');
  }
  return value;
};

module.exports = {
  objectId,
  password,
};

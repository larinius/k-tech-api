const Joi = require('joi');

// Define custom validation functions if needed
const { objectId } = require('./custom.validation');

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getCategories = {
  query: Joi.object().keys({
    // Define query parameters specific to category retrieval if needed
  }),
};

const getCategory = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateCategory = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    // Add other fields to update if needed
  }),
};

const deleteCategory = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};

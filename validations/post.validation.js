const Joi = require('joi');

const { objectId } = require('./custom.validation');

const createPost = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    category: Joi.number().integer().required(),
    author: Joi.number().integer().required(),
    header_image: Joi.string().allow(null).optional(), 
    content: Joi.string().required(),
  }),
};

const getAllPosts = {

};

const getPost = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updatePost = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string().optional(),
    category: Joi.number().integer().optional(),
    header_image: Joi.string().allow(null).optional(),
    content: Joi.string().optional(),
    author: Joi.number().integer().optional(),
  }).min(1), 
};


const deletePost = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
};

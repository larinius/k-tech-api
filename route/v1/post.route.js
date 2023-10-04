const express = require("express");
const router = express.Router();
const postController = require("../../controller/post.controller.js");
const auth = require("../../middleware/auth");
const validate = require("../../middleware/validate");
const postValidation = require("../../validations/post.validation");

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/",
  auth("managePosts"),
  upload.single('image'),
  validate(postValidation.createPost),
  postController.createPost
);

router.get("/", postController.getAllPosts);

router.get(
  "/:id",
  validate(postValidation.getPost),
  postController.getPostById
);

router.put(
  "/:id",
  auth("managePosts"),
  upload.single('image'),
  validate(postValidation.updatePost),
  postController.updatePostById
);

router.delete(
  "/:id",
  auth("managePosts"),
  validate(postValidation.deletePost),
  postController.deletePostById
);

module.exports = router;

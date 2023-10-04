const path = require("path");
const fs = require("fs");
const postService = require("../service/post.service"); // Import the post service
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const fileUpload = require("../utils/fileUpload");

const createPost = catchAsync(async (req, res) => {
  const { title, category, author, content } = req.body;

  const categoryId = parseInt(category, 10);
  const authorId = parseInt(author, 10);

  try {
    const header_image = fileUpload.saveFile(req.file);

    const createdPost = await postService.createPost(
      title,
      categoryId,
      authorId,
      header_image,
      content,
    );

    res.status(httpStatus.CREATED).json({ post: createdPost });
  } catch (err) {
    console.log(err);
  }
});

// Get all posts
const getAllPosts = catchAsync(async (req, res) => {
  const posts = await postService.getAllPosts();
  res.json({ posts });
});

// Get post by ID
const getPostById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const post = await postService.getPostById(id);

  if (!post) {
    return res.status(httpStatus.NOT_FOUND).json({
      message: "Post not found",
    });
  }

  res.json({ post });
});

// Update post by ID
const updatePostById = catchAsync(async (req, res) => {

  const { id } = req.params;
  const { title, category, author, content } = req.body;

  postId = parseInt(id, 10);
  const categoryId = parseInt(category, 10);
  const authorId = parseInt(author, 10);

  let header_image = null; // Initialize header_image as null

  if (req.file) {
    header_image = fileUpload.saveFile(req.file);
  }

  const updatedPost = await postService.updatePostById(
    postId,
    title,
    categoryId,
    authorId,
    header_image,
    content,
  );

  if (!updatedPost) {
    return res.status(httpStatus.NOT_FOUND).json({
      message: "Post not found",
    });
  }

  res.json({ post: updatedPost });
});

// Delete post by ID
const deletePostById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const deletedPost = await postService.deletePostById(id);

  if (!deletedPost) {
    return res.status(httpStatus.NOT_FOUND).json({
      message: "Post not found",
    });
  }

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};

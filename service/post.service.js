const db = require("../models");
const Post = db.post; // Make sure to import the post model from your models folder

// Create a new post
const createPost = async (title, categoryId, author, header_image, content) => {
  // Check if the author and category exist (you may want to add validation here)

  const newPost = await Post.create({
    title,
    categoryId,
    author,
    date_created: new Date(),
    header_image,
    content,
  });

  return newPost;
};

// Get all posts
const getAllPosts = async () => {
  const posts = await Post.findAll();
  return posts;
};

// Get post by ID
const getPostById = async (postId) => {
  const post = await Post.findByPk(postId);
  return post;
};

// Update post by ID
const updatePostById = async (
  postId,
  title,
  categoryId,
  author,
  header_image,
  content
) => {

  const post = await Post.findByPk(postId);

  if (!post) {
    return null; 
  }

  const updatedHeaderImage = header_image !== null ? header_image : post.header_image;

  // Update the post
  await post.update({
    title,
    categoryId,
    author,
    header_image: updatedHeaderImage,
    content
  });

  return post;
};

// Delete post by ID
const deletePostById = async (postId) => {
  // Check if the post exists
  const post = await Post.findByPk(postId);

  if (!post) {
    return null; // Post not found
  }

  // Delete the post
  await post.destroy();
  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};

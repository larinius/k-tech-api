const db = require("../models");
const Category = db.category; // Make sure to import the category model from your models folder

// Create a new category
const createCategory = async (categoryName) => {
  // Check if a category with the same name already exists
  const existingCategory = await Category.findOne({
    where: { categoryName },
  });

  if (existingCategory) {
    return null; // Category already exists
  }

  // Create the new category
  const newCategory = await Category.create({ categoryName });
  return newCategory;
};

// Get all categories
const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

// Get category by ID
const getCategoryById = async (categoryId) => {
  const category = await Category.findByPk(categoryId);
  return category;
};

// Update category by ID
const updateCategoryById = async (categoryId, updatedCategoryName) => {
  // Check if the category exists
  const category = await Category.findByPk(categoryId);

  if (!category) {
    return null; // Category not found
  }

  // Check if a category with the updated name already exists
  const existingCategory = await Category.findOne({
    where: { categoryName: updatedCategoryName },
  });

  if (existingCategory && existingCategory.id !== categoryId) {
    return null; // Category name is already in use
  }

  // Update the category
  await category.update({ categoryName: updatedCategoryName });
  return category;
};

// Delete category by ID
const deleteCategoryById = async (categoryId) => {
  // Check if the category exists
  const category = await Category.findByPk(categoryId);

  if (!category) {
    return null; // Category not found
  }

  // Delete the category
  await category.destroy();
  return category;
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};

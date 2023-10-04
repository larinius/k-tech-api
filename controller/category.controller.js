const categoryService = require("../service/category.service"); // Import the category service

const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

// Create a new category
const createCategory = catchAsync(async (req, res) => {
  const { categoryName } = req.body;

  const createdCategory = await categoryService.createCategory(categoryName);

  if (!createdCategory) {
    return res.status(httpStatus.CONFLICT).json({
      message: "Category already exists",
    });
  }

  res.status(httpStatus.CREATED).json({ category: createdCategory });
});

// Get all categories
const getAllCategories = catchAsync(async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json({ categories });
});

// Get category by ID
const getCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const category = await categoryService.getCategoryById(id);

  if (!category) {
    return res.status(httpStatus.NOT_FOUND).json({
      message: "Category not found",
    });
  }

  res.json({ category });
});

// Update category by ID
const updateCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;

  const updatedCategory = await categoryService.updateCategoryById(id, categoryName);

  if (!updatedCategory) {
    return res.status(httpStatus.NOT_FOUND).json({
      message: "Category not found",
    });
  }

  if (updatedCategory === null) {
    return res.status(httpStatus.CONFLICT).json({
      message: "Category name is already in use",
    });
  }

  res.json({ category: updatedCategory });
});

// Delete category by ID
const deleteCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const deletedCategory = await categoryService.deleteCategoryById(id);

  if (!deletedCategory) {
    return res.status(httpStatus.NOT_FOUND).json({
      message: "Category not found",
    });
  }

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};

const express = require("express");
const router = express.Router();
const categoryController = require("../../controller/category.controller.js");
const auth = require("../../middleware/auth");
const validate = require("../../middleware/validate");
const categoryValidation = require("../../validations/category.validation");

// Create a new category
router.post(
  auth("manageCategories"), // Protect this route with appropriate authorization middleware
  validate(categoryValidation.createCategory), // Validate request data
  categoryController.createCategory
);

// Get all categories
router.get("/", categoryController.getAllCategories);

// Get category by ID
router.get(
  "/:id",
  validate(categoryValidation.getCategory), // Validate request data
  categoryController.getCategoryById
);

// Update category by ID
router.patch(
  "/:id",
  auth("manageCategories"), // Protect this route with appropriate authorization middleware
  validate(categoryValidation.updateCategory), // Validate request data
  categoryController.updateCategoryById
);

// Delete category by ID
router.delete(
  "/:id",
  auth("manageCategories"), // Protect this route with appropriate authorization middleware
  validate(categoryValidation.deleteCategory), // Validate request data
  categoryController.deleteCategoryById
);

module.exports = router;

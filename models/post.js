'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      post.belongsTo(models.user, { foreignKey: 'author', as: 'authorPost' });
      post.belongsTo(models.category, { foreignKey: 'categoryId', as: 'categoryPost' });
    }
  }
  post.init({
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    author: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    header_image: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'post',
  });

  return post;
};

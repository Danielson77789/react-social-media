'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostReact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostReact.belongsTo(models.User, { foreignKey: "userId" });
      PostReact.belongsTo(models.UserPost, { foreignKey: "postId" });
    }
  }
  PostReact.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostReact',
  });
  return PostReact;
};
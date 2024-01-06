'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PostComment.belongsTo(models.UserPost, { foreignKey: 'postId' });
      PostComment.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  PostComment.init({
    commentText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UserPosts',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'PostComment',
  });
  return PostComment;
};
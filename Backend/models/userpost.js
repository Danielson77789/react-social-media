'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserPost.belongsTo(models.User, { foreignKey: 'userId' });
      UserPost.hasMany(models.PostComment, { foreignKey: 'postId' });
      UserPost.hasMany(models.PostReact, { foreignKey: 'postId' });
    }
  }
  UserPost.init({
    postText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    mediaLocation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserPost',
  });
  return UserPost;
};
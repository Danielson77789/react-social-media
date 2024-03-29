'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserPost, { foreignKey: 'userId' });
      User.hasMany(models.PostComment, { foreignKey: 'userId' });
      User.hasMany(models.PostReact, { foreignKey: 'userId' });
      User.hasMany(models.UserMessage, { foreignKey: 'senderId' });
      User.hasMany(models.UserMessage, { foreignKey: 'recipientId' });
      User.hasMany(models.friendship, { foreignKey: 'senderId' });
      User.hasMany(models.friendship, { foreignKey: 'recipientId' });      
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lastLogin: DataTypes.DATE,
    aboutText: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
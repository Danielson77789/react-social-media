'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserMessage.init({
    messageText: {
      text: DataTypes.TEXT,
      allowNull: false
    },
    sendDate: {
      text: DataTypes.DATE,
      allowNull: false
    },
    seenDate: {
      text: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserMessage',
  });
  return UserMessage;
};
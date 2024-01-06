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
      UserMessage.belongsTo(models.User, { foreignKey: 'senderId' });
      UserMessage.belongsTo(models.User, { foreignKey: 'recipientId' });
    }
  }
  UserMessage.init({
    messageText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    senderId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sendDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    seenDate: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'UserMessage',
  });
  return UserMessage;
};
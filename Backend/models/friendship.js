'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friendship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      friendship.belongsTo(models.User, { foreignKey: 'senderId' });
      friendship.belongsTo(models.User, { foreignKey: 'recipientId' });      
    }
  }
  friendship.init({
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    acceptStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'friendship',
  });
  return friendship;
};
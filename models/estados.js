'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estados.hasOne(models.Servicios, {foreignKey: "id"})    }
  }
  Estados.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Pendiente: { 
      type: DataTypes.TINYINT,
      defaultValue: false,
      allowNull: false,
    },
    aprobado: { 
      type: DataTypes.TINYINT,
      defaultValue: false,
      allowNull: false,
    },
    rechazado: { 
      type: DataTypes.TINYINT,
      defaultValue: false,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Estados',
  });
  return Estados;
};
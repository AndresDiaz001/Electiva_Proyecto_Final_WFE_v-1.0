'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Registros.hasOne(models.Personas, {foreignKey: "id"})    }
  }
  Registros.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    contrasenia:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    usuario:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
  }, {
    sequelize,
    modelName: 'Registros',
  });
  return Registros;
};
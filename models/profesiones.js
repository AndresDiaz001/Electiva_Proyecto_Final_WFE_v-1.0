'use strict';
const {Model} = require('sequelize');
const Personas = require("./personas");
module.exports = (sequelize, DataTypes) => {
  class Profesiones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profesiones.hasMany(models.Personas, {foreignKey: "id"})
    }
  }
  Profesiones.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    descripcion:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
  }, {
    sequelize,
    modelName: 'Profesiones',
  });
  return Profesiones;
};
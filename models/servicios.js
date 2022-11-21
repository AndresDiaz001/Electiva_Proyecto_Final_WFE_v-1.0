'use strict';
const {Model} = require('sequelize');
const Estados = require("./estados");
module.exports = (sequelize, DataTypes) => {
  class Servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Servicios.hasOne(models.Estados, {foreignKey: "id"});
    }
  }
  Servicios.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    descripcion:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    ciudad:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    fecha: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    valor:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    direccion:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    id_estado:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: "estados", key: "id"}
    },
  }, {
    sequelize,
    modelName: 'Servicios',
  });
  return Servicios;
};
'use strict';
const {Model} = require('sequelize');
const Profesiones = require("./profesiones");
const Servicios = require("./servicios");
const Registros = require("./registros");
module.exports = (sequelize, DataTypes) => {
  class Personas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Personas.hasMany(models.Profesiones,{foreignKey: "id"});
      Personas.hasMany(models.Servicios,{foreignKey: "id"});
      Personas.hasMany(models.Registros,{foreignKey: "id"});    }
  }
  Personas.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    identificacion:{
     type: DataTypes.STRING,
     defaultValue: false,
     allowNull: false,
    },
    nombre:{
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    apellido: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    telefono: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    email: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    edad: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    residencia: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
     },
    id_profesion:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: "profesiones", key: "id"}
    },
    id_servicio:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: "servicios", key: "id"}
    },
    id_registro:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: "registros", key: "id"}
    },
  }, {
    sequelize,
    modelName: 'Personas',
  });
  return Personas;
};
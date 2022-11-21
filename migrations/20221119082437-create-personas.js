'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identificacion: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      edad: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      residencia: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      id_profesion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: "profesiones",
          },
          key: "id",
        },
      },
      id_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: "servicios",
          },
          key: "id",
        },
      },
      id_registro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: "registros"
          },
          key: "id"
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};
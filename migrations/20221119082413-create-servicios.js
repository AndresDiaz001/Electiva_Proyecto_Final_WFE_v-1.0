'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Servicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      ciudad:{
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      fecha:{
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      valor:{
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
      direccion:{
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
      },
    
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
      id_estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "estados",
          },
          key: "id"
      }
    }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Servicios');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Pendiente: {
        type: Sequelize.TINYINT,
        defaultValue: false,
        allowNull: false,
      },
      aprobado:  {
        type: Sequelize.TINYINT,
        defaultValue: false,
        allowNull: false,
      },
      rechazado:  {
        type: Sequelize.TINYINT,
        defaultValue: false,
        allowNull: false,
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
    await queryInterface.dropTable('Estados');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('profesiones',[{
      nombre: "Ingeniero",
      descripcion: "Encargado de Solucionarle la vida a todo mundo",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('profesiones', null, {});
  }
};

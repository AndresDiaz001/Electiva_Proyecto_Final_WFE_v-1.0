'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('registros',[{
      email: "ing@campusucc.edu.co",
      contrasenia: "123456789",
      usuario: "ing01",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('registros', null, {});
  }
};

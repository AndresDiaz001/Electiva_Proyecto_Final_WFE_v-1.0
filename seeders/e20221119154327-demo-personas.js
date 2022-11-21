'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('personas',[{
      identificacion: "80134526",
      nombre: "Eduardo",
      apellido: "Cardenas",
      telefono: "3104245658",
      email:"eduardoing@elcorreo.com",
      edad: "32",
      residencia: "Cali",
      id_profesion:1,
      id_servicio:1,
      id_registro:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('personas', null, {});
  }
};

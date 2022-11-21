'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('servicios',[{
      nombre: "contruccion de ova",
      descripcion: "herramienta interactiva para el desarrollo integral de empleados del estado",
      ciudad: "Cali",
      fecha: "12/06/2022",
      valor:"50000000",
      direccion: "Calle 100 # 7-27",
      createdAt: new Date(),
      updatedAt: new Date(),
      id_estado: 1
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('servicios', null, {});
  }
};

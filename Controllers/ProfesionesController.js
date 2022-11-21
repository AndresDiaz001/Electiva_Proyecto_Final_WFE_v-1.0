'use strict';
const Sequelize = require('sequelize');
const profesiones = require('../models').Profesiones;

module.exports = {
    List(_, res){
        return profesiones.findAll({})
        .then(profesiones => res.status(200).send(profesiones))
        .catch(error => res.status(400).send(error))
    },
    ListAt(req, res) {
        return profesiones
          .findAll({
            where: {
              id: req.params.id,
            },
          })
          .then((profesiones) => res.status(200).send(profesiones))
          .catch((error) => res.status(400).send(error));
      },
      eliminarProfesiones(req, res) {
        return profesiones
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((profesiones) => res.sendStatus(profesiones))
          .catch((error) => res.status(400).send(error));
      },
      actualizarProfesiones(req, res) {
        return profesiones
          .update(
            {
              nombre: req.body.nombre,
              descripcion: req.body.descripcion,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              where: {
                id: req.params.id,
              },
            }
          )
          .then((result) => {
            res.json(result);
          });
  },
  crearProfesiones(req, res) {
    return profesiones
      .create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((profesiones) => res.status(200).send(profesiones))
      .catch((error) => res.status(400).send(error));
  },
}
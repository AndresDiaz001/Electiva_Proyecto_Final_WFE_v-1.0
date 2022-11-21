'use strict';
const Sequelize = require('sequelize');
const estados = require('../models').Estados;

module.exports = {
    List(_, res){
        return estados.findAll({})
        .then(estados => res.status(200).send(estados))
        .catch(error => res.status(400).send(error))
    },
    ListAt(req, res) {
        return estados
          .findAll({
            where: {
              id: req.params.id,
            },
          })
          .then((estados) => res.status(200).send(estados))
          .catch((error) => res.status(400).send(error));
      },
      eliminarEstados(req, res) {
        return estados
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((estados) => res.sendStatus(estados))
          .catch((error) => res.status(400).send(error));
      },
      actualizarEstados(req, res) {
        return estados
          .update(
            {
              pendiente: req.body.pendiente,
              aprobado: req.body.aprobado,
              rechazado: req.body.rechazado,
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
crearEstado(req, res) {
  return estados
    .create({
      pendiente: req.body.pendiente,
      aprobado: req.body.aprobado,
      rechazado: req.body.rechazado,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then((estados) => res.status(200).send(estados))
    .catch((error) => res.status(400).send(error));
},
}
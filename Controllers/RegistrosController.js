'use strict';
const Sequelize = require('sequelize');
const registros = require('../models').Registros;

module.exports = {
    List(_, res){
        return registros.findAll({})
        .then(registros => res.status(200).send(registros))
        .catch(error => res.status(400).send(error))
    },
    ListAt(req, res) {
        return registros
          .findAll({
            where: {
              id: req.params.id,
            },
          })
          .then((registros) => res.status(200).send(registros))
          .catch((error) => res.status(400).send(error));
      },
      eliminarRegistros(req, res) {
        return registros
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((registros) => res.sendStatus(registros))
          .catch((error) => res.status(400).send(error));
      },
      actualizarRegistros(req, res) {
        return registros
          .update(
            {
            email: req.body.email,
            contrasenia: req.body.contrasenia,
            usuario: req.body.usuario,
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
  crearRegistros(req, res) {
    return registros
      .create({
        email: req.body.email,
        contrasenia: req.body.contrasenia,
        usuario: req.body.usuario,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((registros) => res.status(200).send(registros))
      .catch((error) => res.status(400).send(error));
  },
}
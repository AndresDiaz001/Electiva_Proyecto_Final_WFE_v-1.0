'use strict';
const Sequelize = require('sequelize');
const servicios = require('../models').Servicios;

module.exports = {
    List(_, res){
        return servicios.findAll({})
        .then(servicios => res.status(200).send(servicios))
        .catch(error => res.status(400).send(error))
    },
    ListAt(req, res) {
        return servicios
          .findAll({
            where: {
              id: req.params.id,
            },
          })
          .then((servicios) => res.status(200).send(servicios))
          .catch((error) => res.status(400).send(error));
      },
      eliminarServicios(req, res) {
        return servicios
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((servicios) => res.sendStatus(servicios))
          .catch((error) => res.status(400).send(error));
      },
      actualizarServicios(req, res) {
        return servicios
          .update(
            {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            ciudad: req.body.ciudad,
            fecha: req.body.fecha,
            valor: req.body.valor,
            direccion: req.body.direccion,
            createdAt: new Date(),
            updatedAt: new Date(),
            id_estado: req.body.id_estado
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
  crearServicio(req, res) {
    return servicios
      .create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            ciudad: req.body.ciudad,
            fecha: req.body.fecha,
            valor: req.body.valor,
            direccion: req.body.direccion,
            createdAt: new Date(),
            updatedAt: new Date(),
            id_estado: req.body.id_estado
      })
      .then((servicios) => res.status(200).send(servicios))
      .catch((error) => res.status(400).send(error));
  },
}
'use strict';
const Sequelize = require('sequelize');
const personas = require('../models').Personas;

module.exports = {
    List(_, res){
        return personas.findAll({})
        .then(personas => res.status(200).send(personas))
        .catch(error => res.status(400).send(error))
    },
    ListAt(req, res) {
      return personas
        .findAll({
          where: {
            id: req.params.id,
          },
        })
        .then((personas) => res.status(200).send(personas))
        .catch((error) => res.status(400).send(error));
    },
    eliminarPersonas(req, res) {
      return personas
        .destroy({
          where: {
            id: req.params.id,
          },
        })
        .then((personas) => res.sendStatus(personas))
        .catch((error) => res.status(400).send(error));
    },
    actualizarPersonas(req, res) {
      return personas
        .update(
          {
            identificacion: req.body.identificacion,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            email:req.body.email,
            edad: req.body.edad,
            residencia: req.body.residencia,
            id_profesion:req.body.id_profesion,
            id_servicio:req.body.id_servicio,
            id_registro:req.body.id_registro,
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
crearPersona(req, res) {
  return personas
    .create({
      identificacion: req.body.identificacion,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            email:req.body.email,
            edad: req.body.edad,
            residencia: req.body.residencia,
            id_profesion:req.body.id_profesion,
            id_servicio:req.body.id_servicio,
            id_registro:req.body.id_registro,
            createdAt: new Date(),
            updatedAt: new Date()
    })
    .then((personas) => res.status(200).send(personas))
    .catch((error) => res.status(400).send(error));
},

  
}
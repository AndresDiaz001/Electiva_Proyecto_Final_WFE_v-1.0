var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');

require("dotenv").config();

dotenv.config();


const personasController= require('../controllers/PersonasController');
const estadosController= require('../controllers/EstadosController');
const profesionesController= require('../controllers/ProfesionesController');
const registrosController= require('../controllers/RegistrosController');
const serviciosController= require('../controllers/ServiciosController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//consultas crud Andres
router.get('/api/personas', personasController.List);
router.get('/api/personas/id/:id', personasController.ListAt);
router.delete('/api/personas/id/:id', personasController.eliminarPersonas);
router.patch('/api/personas/id/:id', personasController.actualizarPersonas);
router.post('/api/personas/:nombre/:apellido/:telefono/:email/:edad/:residencia/:id_profesion/:id_servicio/:id_registro/:createdAt/:updatedAt', personasController.crearPersona);
router.get('/api/estados', estadosController.List);
router.get('/api/estados/id/:id', estadosController.ListAt);
router.delete('/api/estados/id/:id', estadosController.eliminarEstados);
router.patch('/api/estados/id/:id', estadosController.actualizarEstados);
router.post('/api/estados/:pendiente/:aprobado/:rechazado/:createdAt/:updatedAt', estadosController.crearEstado);

module.exports = router;

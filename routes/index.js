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
//consultas crud Eduard
router.get('/api/profesiones', profesionesController.List);
router.get('/api/profesiones/id/:id', profesionesController.ListAt);
router.delete('/api/profesiones/id/:id', profesionesController.eliminarProfesiones);
router.patch('/api/profesiones/id/:id', profesionesController.actualizarProfesiones);
router.post('/api/profesiones/:nombre/:descripcion/:createdAt/:updateAt', profesionesController.crearProfesiones);
//Consultas crud Felipe
router.get('/api/registros', registrosController.List);
router.get('/api/registros/id/:id', registrosController.ListAt);
router.delete('/api/registros/id/:id', registrosController.eliminarRegistros);
router.patch('/api/registros/id/:id', registrosController.actualizarRegistros);
router.post('/api/registros/:email/:contrasenia/:usuario/:createdAt/:updateAt', registrosController.crearRegistros);
//Consultas crud Leandro
router.get('/api/servicios', serviciosController.List);
router.get('/api/servicios/id/:id', serviciosController.List);
router.delete('/api/servicios/id/:id', serviciosController.eliminarServicios);
router.patch('/api/servicios/id/:id', serviciosController.actualizarServicios);
router.post('/api/servicios/:nombre/:descripcion/:ciudad/:fecha/:valor/:direccion/:createdAt/:updateAt/:id_estado', serviciosController.crearServicio);

module.exports = router;

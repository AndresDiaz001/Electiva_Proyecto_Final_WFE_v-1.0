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
//Consultas crud Leandro
router.get('/api/servicios', serviciosController.List);
router.get('/api/servicios/id/:id', serviciosController.List);
router.delete('/api/servicios/id/:id', serviciosController.eliminarServicios);
router.patch('/api/servicios/id/:id', serviciosController.actualizarServicios);
router.post('/api/servicios/:nombre/:descripcion/:ciudad/:fecha/:valor/:direccion/:createdAt/:updateAt/:id_estado', serviciosController.crearServicio);

module.exports = router;

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

//consultas crud Eduard
router.get('/api/profesiones', profesionesController.List);
router.get('/api/profesiones/id/:id', profesionesController.ListAt);
router.delete('/api/profesiones/id/:id', profesionesController.eliminarProfesiones);
router.patch('/api/profesiones/id/:id', profesionesController.actualizarProfesiones);
router.post('/api/profesiones/:nombre/:descripcion/:createdAt/:updateAt', profesionesController.crearProfesiones);


module.exports = router;

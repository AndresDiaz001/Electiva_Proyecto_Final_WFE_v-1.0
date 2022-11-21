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

//Consultas crud Felipe
router.get('/api/registros', registrosController.List);
router.get('/api/registros/id/:id', registrosController.ListAt);
router.delete('/api/registros/id/:id', registrosController.eliminarRegistros);
router.patch('/api/registros/id/:id', registrosController.actualizarRegistros);
router.post('/api/registros/:email/:contrasenia/:usuario/:createdAt/:updateAt', registrosController.crearRegistros);

module.exports = router;

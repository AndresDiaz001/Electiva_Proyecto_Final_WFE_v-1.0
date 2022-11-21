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



module.exports = router;

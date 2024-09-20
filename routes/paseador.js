const { Router } = require('express')
const { getAllPaseadores, getPaseadorPorId, getPaseadorPerrosConFiltro } = require('../controllers/paseador')

const rutas = Router()
console.log('Ingresando a rutas paseador')
rutas.get('/', getAllPaseadores)
rutas.get('/:idPaseador', getPaseadorPorId)
rutas.get('/filtro', getPaseadorPerrosConFiltro)

module.exports = rutas

// const express = require('express');
// const { getPaseadorPerros, getAllPaseadores, getPaseadorPorId } = require('../controllers/paseador');
// const router = express.Router();

// router.get('/', getAllPaseadores);
// router.get('/:idPaseador', getPaseadorPorId)

// module.exports = router;

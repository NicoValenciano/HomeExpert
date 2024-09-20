const express = require('express')
const { getAllPaseadores, getPaseadorPorId, getPaseadorPerrosConFiltro } = require('../controllers/paseador')

const rutas = express.Router()



rutas.get('/filtro', getPaseadorPerrosConFiltro)
rutas.get('/:idPaseador', getPaseadorPorId)
rutas.get('/', getAllPaseadores)

module.exports = rutas


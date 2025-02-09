const express = require('express')
const cors = require('cors')
const { getAllPaseadores, getPaseadorPorId, getPaseadorPerrosConFiltro } = require('../controllers/paseador')

const rutas = express.Router()

rutas.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 204
}))

rutas.get('/filtro', getPaseadorPerrosConFiltro)
rutas.get('/:idPaseador', getPaseadorPorId)
rutas.get('/', getAllPaseadores)

module.exports = rutas

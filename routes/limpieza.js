const express = require('express')
const cors = require('cors')
const { getLimpieza, getLimpiezaById, getLimpiezaBySexo } = require('../controllers/limpieza')

const rutas = express.Router()

rutas.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 204
}))

// ruta para obtener las personas por sexo (req.query)
rutas.get('/filtro', getLimpiezaBySexo)
// Ruta para obtener a una persona de limpieza por ID (req.params)
rutas.get('/:id', getLimpiezaById)
// ruta para obtener todas las personas de limpieza
rutas.get('/', getLimpieza)

module.exports = rutas

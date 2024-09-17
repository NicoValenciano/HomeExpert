const { Router } = require('express')
const { getLimpieza } = require('../controllers/limpieza')

const rutas = Router()

// ruta que tiene todas las personas de limpieza
rutas.get('/', getLimpieza)

module.exports = rutas

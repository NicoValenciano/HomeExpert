const { Router } = require('express')
const { getLimpieza, getLimpiezaById, getLimpiezaBySexo } = require('../controllers/limpieza')

const rutas = Router()

// ruta que tiene todas las personas de limpieza
rutas.get('/', getLimpieza)
// Ruta para obtener a una persona de limpieza por ID (req.params)
rutas.get('/:id', getLimpiezaById)
// ruta para obtener las personas por sexo (req.query)
rutas.get('/sexo', getLimpiezaBySexo)

module.exports = rutas

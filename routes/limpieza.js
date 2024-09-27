const { Router } = require('express')
const { getLimpieza, getLimpiezaById, getLimpiezaBySexo } = require('../controllers/limpieza')

const rutas = Router()

// ruta para obtener las personas por sexo (req.query)
rutas.get('/filtro', getLimpiezaBySexo)
// Ruta para obtener a una persona de limpieza por ID (req.params)
rutas.get('/:id', getLimpiezaById)
// ruta para obtener todas las personas de limpieza
rutas.get('/', getLimpieza)

module.exports = rutas

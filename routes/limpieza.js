const { Router } = require('express')
const { getLimpieza, getLimpiezaByEdad, getLimpiezaBySexo } = require('../controllers/limpieza')

const rutas = Router()

// ruta que tiene todas las personas de limpieza
rutas.get('/', getLimpieza)
// ruta para obrtener a las personas de limpieza por edad (req.params)
rutas.get('/:edad', getLimpiezaByEdad)
// ruta para obtener las personas por sexo (req.query)
rutas.get('/sexo', getLimpiezaBySexo)

module.exports = rutas

// Importo express
const express = require('express')

// importo el controlador de mantenimientos
const { getMantenimientos, getMantenimientoPorId, getMantenimientoPorSexo } = require('../controllers/mantenimiento')

// Creo una nueva instancia de un router de Express
const router = express.Router()

// Ruta para obtener todos los mantenimientos
router.get('/', getMantenimientos)

// Ruta para obtener un mantenimiento específico por su ID
router.get('/:idMantenimiento', getMantenimientoPorId)

// Ruta para obtener los mantenimientos filtrados por sexo
router.get('/sexo/:sexo', getMantenimientoPorSexo)

// Exporto el router
module.exports = router

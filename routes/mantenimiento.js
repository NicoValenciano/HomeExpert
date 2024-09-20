// Importo express
const express = require('express')

// importo el controlador de mantenimientos
const { getMantenimientoPorId, getMantenimientos, getMantenimientosPorOficio } = require('../controllers/mantenimiento')

// Creo una nueva instancia de un router de Express
const router = express.Router()

// Ruta para obtener empleados de mantenimiento por oficio o lista completa
router.get('/filtro', getMantenimientosPorOficio)

// Ruta para obtener un mantenimiento específico por su ID
router.get('/:idMantenimiento', getMantenimientoPorId)

// Ruta para obtener todos los mantenimientos
router.get('/', getMantenimientos)

// Exporto el router
module.exports = router

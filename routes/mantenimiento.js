// Importo express
const express = require('express')

// importo el controlador de mantenimientos
const { getMantenimientos } = require('../controllers/mantenimiento')

// Creo una nueva instancia de un router de Express
const router = express.Router()

// Ruta para obtener todos los mantenimientos
router.get('/', getMantenimientos)

// Exporto el router
module.exports = router

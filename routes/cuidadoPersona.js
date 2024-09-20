const express = require('express')

const { getCuidadores, getCuidadoresPorId, getCuidadoresPorCalificacion } = require('../controllers/cuidadoPersona')

const router = express.Router()

router.get('/', getCuidadores)

router.get('/:idCuidador', getCuidadoresPorId)

router.get('/calificacion/:calificacion', getCuidadoresPorCalificacion)

module.exports = router

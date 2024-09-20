const express = require('express')

const { getCuidadores, getCuidadoresPorId } = require('../controllers/cuidadoPersona')

const router = express.Router()

router.get('/', getCuidadores)

router.get('/:idCuidador', getCuidadoresPorId)

module.exports = router

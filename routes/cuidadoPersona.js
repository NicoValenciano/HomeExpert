const express = require('express')

const { getCuidadores, getCuidadoresPorId, getCuidadoresPorCalificacion } = require('../controllers/cuidadoPersona')

const router = express.Router()

router.get('/filtro', getCuidadoresPorCalificacion)
router.get('/', getCuidadores)
router.get('/:idCuidador', getCuidadoresPorId)



module.exports = router

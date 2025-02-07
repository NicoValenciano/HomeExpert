const express = require('express')
const cors = require('cors')
const { getCuidadores, getCuidadoresPorId, getCuidadoresPorCalificacion } = require('../controllers/cuidadoPersona')

const router = express.Router()

router.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 204
}))

router.get('/filtro', getCuidadoresPorCalificacion)
router.get('/', getCuidadores)
router.get('/:idCuidador', getCuidadoresPorId)

module.exports = router

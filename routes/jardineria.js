const express = require('express')
const cors = require('cors')
const { getJardineros, getJardinero, getJardineroFiltro } = require('../controllers/jardineria')

const router = express.Router()

router.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET'], // Only allow GET methods as defined in your routes
    allowedHeaders: ['Content-Type', 'Authorization']
}))

router.get('/filtro', getJardineroFiltro)
router.get('/:idJardinero', getJardinero)
router.get('/', getJardineros)

module.exports = router

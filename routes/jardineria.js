const express = require('express')
const cors = require('cors')
const { getJardineros, getJardinero, getJardineroFiltro } = require('../controllers/jardineria')

const router = express.Router()

router.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 204
  }));

router.options('*', cors());

router.get('/filtro', getJardineroFiltro)
router.get('/:idJardinero', getJardinero)
router.get('/', getJardineros)

module.exports = router

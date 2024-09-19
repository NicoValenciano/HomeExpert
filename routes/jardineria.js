const express = require('express')
const { getJardineros, getJardinero, getJardineroFiltro } = require('../controllers/jardineria')

const router = express.Router()

router.get('/filtro', getJardineroFiltro);
router.get('/:idJardinero', getJardinero)
router.get('/', getJardineros)

module.exports = router

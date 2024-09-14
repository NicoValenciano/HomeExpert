//  const { Router } = require('express')
// const { getJardineros, getJardinero, getJardineroFiltro } = require('../controllers/jardineria')

// const rutas = Router()

// rutas.get('/', getJardineros);
// rutas.get('/:idJardinero', getJardinero);

// module.exports = rutas

const express = require('express')
const { getJardineros, getJardinero } = require('../controllers/jardineria')

const router = express.Router()

// router.get('/filtro', getJardineroFiltro);
router.get('/:idJardinero', getJardinero)
router.get('/', getJardineros)

module.exports = router

const express = require('express')

const { getCuidadores } = require('../controllers/cuidadoPersona')

const router = express.Router()

router.get('/', getCuidadores)

module.exports = router

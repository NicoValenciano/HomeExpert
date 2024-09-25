const path = require('path')
const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
    this.app.use('/api/v1/jardineria', require('../routes/jardineria')) // Valenciano Nicolas
    this.app.use('/api/v1/mantenimiento', require('../routes/mantenimiento')) // Diaz Jonatan
    this.app.use('/api/v1/cuidadoPersona', require('../routes/cuidadoPersona')) // Dahua Bruno
    this.app.use('/api/v1/paseador', require('../routes/paseador')) // Piergentili Camila
    this.app.use('/api/v1/LimpiezadelHogar', require('../routes/limpieza')) // Murano Lucila

    // Ruta para manejar todas las rutas que no existen

    this.app.use('/:any', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'))
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}

module.exports = Server

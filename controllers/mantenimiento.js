// Importo biblioteca axios para hacer solicitudes HTTP
const axios = require('axios')

// Importo los objetos request y response
const { request, response } = require('express')

// Función para obtener todos los empleados de mantenimientos
const getMantenimientos = (req = request, res = response) => {
  console.log('Obteniendo lista de empleados de mantenimiento COMPLETA.')

  axios.get('https://66e41d3ed2405277ed132021.mockapi.io/api/v1/mantenimiento')
    .then((response) => {
      const { data = [] } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getMantenimientos
}

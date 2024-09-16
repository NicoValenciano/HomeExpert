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

// Función para obtener empleado por id
const getMantenimientoPorId = (req = request, res = response) => {
  const { idMantenimiento } = req.params
  console.log(`Mostrando datos del empleado con id de mantenimiento: ${idMantenimiento}`)

  axios.get(`https://66e41d3ed2405277ed132021.mockapi.io/api/v1/mantenimiento/${idMantenimiento}`)
    .then((response) => {
      const { data } = response
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

// Función para filtrar empleados por sexo
const getMantenimientoPorSexo = (req = request, res = response) => {
  const { sexo } = req.params // Obtenemos el valor del parámetro sexo desde req.params
  console.log(`Mostrando empleados de mantenimiento con sexo: ${sexo}`)

  axios.get('https://66e41d3ed2405277ed132021.mockapi.io/api/v1/mantenimiento')
    .then((response) => {
      const { data = [] } = response

      // Filtramos por el sexo indicado, ignorando mayúsculas/minúsculas
      const filteredData = data.filter(item => item.sexo.toLowerCase() === sexo.toLowerCase())

      if (filteredData.length > 0) {
        res.status(200).json({
          msg: 'Ok',
          data: filteredData
        })
      } else {
        res.status(404).json({
          msg: 'No se encontraron empleados con el sexo especificado',
          data: []
        })
      }
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error: error.message
      })
    })
}

module.exports = {
  getMantenimientos,
  getMantenimientoPorId,
  getMantenimientoPorSexo
}

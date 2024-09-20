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
      res.status(404).json({
        msg: 'Error, no se pudo obtener la lista de empleados de mantenimiento',
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
      res.status(404).json({
        msg: 'Error, no se pudo obtener el empleado de mantenimiento con ese id',
        error
      })
    })
}


/* Función para obtener empleados de mantenimiento filtrados por oficio en caso de no pasar oficio
  se muestran todos los empleados de mantenimiento */

const getMantenimientosPorOficio = (req = request, res = response) => {
  const { oficio = '' } = req.query // Capturo el parámetro oficio de la query
  console.log(`Filtrando por oficio: ${oficio}`)

  const filtro = (oficio) ? `?oficio=${oficio}` : ''

  axios.get(`https://66e41d3ed2405277ed132021.mockapi.io/api/v1/mantenimiento${filtro}`)
    .then((response) => {
      const { data = [] } = response

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(404).json({
        msg: 'Error, no se pudo obtener la lista de empleados de mantenimiento con ese oficio',
        error
      })
    })
}


module.exports = {
  getMantenimientos,
  getMantenimientoPorId,
  getMantenimientosPorOficio
}

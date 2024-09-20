const axios = require('axios')
const { request, response } = require('express')

// Obtengo todos los paseadores
const getAllPaseadores = (req = request, res = response) => {
  axios.get('https://66e209c3c831c8811b570593.mockapi.io/api/v1/paseador')
    .then((response) => {
      const { data = [] } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((err) => {
      res.status(400).json({
        msg: 'Error',
        err
      })
    })
}

// Obtengo un paseador por id
const getPaseadorPorId = (req = request, res = response) => {
  const { idPaseador = '' } = req.params
  console.log(req.params)

  axios.get(`https://66e209c3c831c8811b570593.mockapi.io/api/v1/paseador/${idPaseador}`)
    .then((response) => {
      const data = response.data

      res.status(200).json({
        msg: 'Ok',
        data

      })
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({
        msg: 'Error',
        err
      })
    })
}

// Ruta que trae todos los paseadores depende su disponibilidad
const getPaseadorPerrosConFiltro = (req = request, res = response) => {
  const { disponibilidad = '' } = req.query

  const filtro = disponibilidad ? `?disponibilidad=${disponibilidad}` : ''

  axios.get(`https://66e209c3c831c8811b570593.mockapi.io/api/v1/paseador${filtro}`)
    .then((response) => {
      const data = response.data

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((err) => {
      res.status(400).json({
        msg: 'Error',
        err
      })
    })
}

module.exports = {
  getAllPaseadores,
  getPaseadorPorId,
  getPaseadorPerrosConFiltro

}

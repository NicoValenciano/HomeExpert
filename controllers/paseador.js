const axios = require('axios')
const { request, response } = require('express')

// Obtengo todos los paseadores
const getAllPaseadores = async (req = request, res = response) => {
  try {
    const { data = [] } = await axios.get('https://66e209c3c831c8811b570593.mockapi.io/api/v1/paseador')
    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (err) {
    if (err.response) {
      handlerException(res, err, err.response)
    }
  }
}

// Obtengo un paseador por id
const getPaseadorPorId = async (req = request, res = response) => {
  const { idPaseador = '' } = req.params

  try {
    const { data } = await axios.get(`https://66e209c3c831c8811b570593.mockapi.io/api/v1/paseador/${idPaseador}`)

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (err) {
    if (err.response) {
      handlerException(res, err, err.response)
    }
  }
}

// Ruta que trae todos los paseadores depende su disponibilidad
const getPaseadorPerrosConFiltro = async (req = request, res = response) => {
  const { disponibilidad = '' } = req.query

  if (disponibilidad && !['true', 'false'].includes(disponibilidad)) {
    return res.status(400).json({
      msg: 'Bad Request',
      err: 'El parámetro de disponibilidad es inválido'
    })
  }

  const filtro = disponibilidad ? `?disponibilidad=${disponibilidad}` : ''

  try {
    const { data = [] } = await axios.get(`https://66e209c3c831c8811b570593.mockapi.io/api/v1/paseador${filtro}`)

    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (err) {
    if (err.response) {
      handlerException(res, err, err.response)
    }
  }
}

const handlerException = (res, err, statusCode) => {
  const status = statusCode.status

  switch (status) {
    case 400:
      res.status(400).json({
        msg: 'Bad Request',
        err: err.message
      })
      break

    case 404:
      res.status(404).json({
        msg: 'No se encontraron paseadores',
        err: err.message
      })
      break

    default:
      res.status(500).json({
        msg: 'Internal Server Error',
        err: err.message
      })
  }
}

module.exports = {
  getAllPaseadores,
  getPaseadorPorId,
  getPaseadorPerrosConFiltro

}

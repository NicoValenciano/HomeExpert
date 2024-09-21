const axios = require('axios')
const { request, response } = require('express')

// funcion que me trae todas las personas de limpieza
const getLimpieza = (req = request, res = response) => {
  const { nombre = '', apellido = '', foto = '', edad = '', sexo = '', disponible = '', precio = '', calificacion = '', id = '' } = req.query
  console.log(nombre, apellido, foto, edad, sexo, disponible, precio, calificacion, id)

  axios.get('https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/LimpiezadelHogar')
    .then((response) => {
      const { data = [] } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      res.status(400).json({
        msg: 'Error en la busqueda',
        error
      })
    })
}

// funcion que me trae a las personas de limpieza por ID (req.params)
const getLimpiezaById = (req = request, res = response) => {
  const { id } = req.params

  axios.get(`https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/LimpiezadelHogar/${id}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Se encontraron personas',
        data
      })
    })
    .catch((error) => {
      res.status(400).json({
        msg: 'Error al obtener la persona de limpieza por ID',
        error
      })
    })
}

// funcion que me trae a las personas de limpieza por sexo (req.query)
const getLimpiezaBySexo = (req = request, res = response) => {
  const { sexo } = req.query

  if (!sexo) {
    return res.status(400).json({
      msg: 'El parámetro "sexo" es requerido',
      data: []
    })
  }

  axios.get('https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/LimpiezadelHogar')
    .then((response) => {
      const { data = [] } = response

      const personasPorSexo = data.filter(persona => persona.sexo === sexo)

      if (personasPorSexo.length > 0) {
        res.status(200).json({
          msg: 'Ok',
          data: personasPorSexo
        })
      } else {
        res.status(404).json({
          msg: `No se encontraron personas de limpieza con sexo ${sexo}`,
          data: []
        })
      }
    })
    .catch((error) => {
      res.status(400).json({
        msg: 'Error al obtener las personas de limpieza',
        error
      })
    })
}

module.exports = {
  getLimpieza,
  getLimpiezaById,
  getLimpiezaBySexo
}

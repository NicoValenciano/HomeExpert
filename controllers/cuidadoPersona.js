const axios = require('axios')

const { request, response } = require('express')

const getCuidadores = (req = request, res = response) => {
  axios.get('https://66e20943c831c8811b5703f6.mockapi.io/cuidadoresPersonas')
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

const getCuidadoresPorId = (req = request, res = response) => {
  const { idCuidador } = req.params

  // // Valido que se este pasando un numero por parametro
  if (isNaN(idCuidador)) {
    return res.status(400).json({
      msg: 'Error',
      data: 'El ID del cuidador debe ser un número válido'
    })
  }

  axios.get(`https://66e20943c831c8811b5703f6.mockapi.io/cuidadoresPersonas/${idCuidador}`)
    .then((response) => {
      const { data } = response

      // Valido si no se encontraron datos
      if (!data) {
        return res.status(404).json({
          msg: 'Error',
          data: 'Cuidador no encontrado'
        })
      }

      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        res.status(404).json({
          msg: 'Error',
          data: 'Cuidador no encontrado'
        })
      } else {
        res.status(400).json({
          msg: 'Error',
          error: error.message
        })
      }
    })
}

const getCuidadoresPorCalificacion = async (req = request, res = response) => {
  const { calificacion = '' } = req.query
  try {
    const filtro = calificacion ? `?calificacion=${calificacion}` : ''
    const response = await axios.get(`https://66e20943c831c8811b5703f6.mockapi.io/cuidadoresPersonas${filtro}`)
    let personas = response.data

    if (calificacion) {
      personas = personas.filter(persona =>
        persona.calificacion === parseInt(calificacion, 10) && persona.disponibilidad === true
      )
    } else {
      personas = personas.filter(persona => persona.disponibilidad === true)
    }

    res.status(200).json({
      msg: 'Ok',
      data: personas
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error',
      error: error.message
    })
  }
}

module.exports = {
  getCuidadores,
  getCuidadoresPorId,
  getCuidadoresPorCalificacion
}

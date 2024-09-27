const axios = require('axios')
const { request, response } = require('express')

// Función reutilizable para manejar las respuestas
const manejarRespuesta = (res, codigoEstado, datos = null, mensaje = '') => {
  const respuestas = {
    200: { status: 'ok', data: datos, msg: mensaje || 'Solicitud exitosa' },
    300: { status: 'redirect', msg: mensaje || 'Redirección necesaria' },
    400: { status: 'error', msg: mensaje || 'Bad Request: Solicitud mal formulada' },
    404: { status: 'error', msg: mensaje || 'Not Found: El recurso solicitado no se pudo encontrar' },
    500: { status: 'error', msg: mensaje || 'Error en el servidor' },
    503: { status: 'error', msg: 'El servidor no está disponible temporalmente' }
  }

  const respuesta = respuestas[codigoEstado] || { status: 'error', msg: 'Código de estado no manejado' }
  return res.status(codigoEstado).json(respuesta)
}

// Función que trae todas las personas de limpieza
const getLimpieza = (req = request, res = response) => {
  axios.get('https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/limpiezaDelHogar')
    .then(response => {
      const { data = [] } = response
      manejarRespuesta(res, 200, data, 'Personas encontradas para limpieza del hogar')
    })
    .catch(error => {
      const codigoEstado = error.response ? error.response.status : 500
      const mensajeError = error.response ? error.response.data.msg : 'Error en el servidor'
      manejarRespuesta(res, codigoEstado, null, mensajeError)
    })
}

// Función que trae personas de limpieza por ID (req.params)
const getLimpiezaById = (req = request, res = response) => {
  const { id } = req.params

  axios.get(`https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/limpiezaDelHogar/${id}`)
    .then(response => {
      const { data } = response
      manejarRespuesta(res, 200, data, 'Persona de limpieza encontrada')
    })
    .catch(error => {
      const codigoEstado = error.response ? error.response.status : 500
      const mensajeError = error.response ? error.response.data.msg : 'Error en el servidor'
      manejarRespuesta(res, codigoEstado, null, mensajeError)
    })
}

// Función que trae personas de limpieza por sexo (req.query)
const getLimpiezaBySexo = (req = request, res = response) => {
  const { sexo } = req.query

  if (!sexo || (sexo.toLowerCase() !== 'male' && sexo.toLowerCase() !== 'female')) {
    return manejarRespuesta(res, 400, null, 'Se requiere el parámetro "sexo" con valores válidos: "male" o "female"')
  }

  axios.get('https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/limpiezaDelHogar')
    .then(response => {
      const { data = [] } = response
      const personasPorSexo = data.filter(persona => persona.sexo.toLowerCase() === sexo.toLowerCase())

      if (personasPorSexo.length > 0) {
        manejarRespuesta(res, 200, personasPorSexo, 'Personas encontradas')
      } else {
        manejarRespuesta(res, 404, null, `No se encontraron personas de limpieza con sexo ${sexo}`)
      }
    })
    .catch(error => {
      const codigoEstado = error.response ? error.response.status : 500
      const mensajeError = error.response ? error.response.data.msg : 'Error en el servidor'
      manejarRespuesta(res, codigoEstado, null, mensajeError)
    })
}

module.exports = {
  getLimpieza,
  getLimpiezaById,
  getLimpiezaBySexo
}

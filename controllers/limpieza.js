const axios = require('axios')
const { request, response } = require('express')

// funcion que me trae todas las personas de limpieza
const getLimpieza = (req = request, res = response) => {
  const { nombre = '', apellido = '', foto = '', edad = '', sexo = '', disponible = '', precio = '', calificacion = '', id = '' } = req.query
  console.log(nombre, apellido, foto, edad, sexo, disponible, precio, calificacion, id)

  try {
    axios.get('https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/limpiezaDelHogar')
      .then((response) => {
        const { data = [] } = response
        res.status(200).json({
          msg: 'Ok',
          data
        })
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              res.status(400).json({
                msg: 'Error al tratar de obtener a las personas de limpieza',
                error: error.message
              })
              break
            case 404:
              res.status(404).json({
                msg: 'No se encontraron personas de limpieza',
                error: error.message
              })
              break
            default:
              res.status(500).json({
                msg: 'Error en el servidor',
                error: error.message
              })
          }
        }
      })
  } catch (error) {
    res.status(500).json({
      msg: 'Error en el servidor',
      error: error.message
    })
  }
}

// Función que trae una persona de limpieza por ID (req.params)
const getLimpiezaById = (req = request, res = response) => {
  const { id } = req.params
  try {
    axios.get(`https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/limpiezaDelHogar/${id}`)
      .then((response) => {
        const { data } = response
        res.status(200).json({
          msg: 'Ok',
          data
        })
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            case 404:
              res.status(404).json({
                msg: `No se encontro una persona de limpieza con ID ${id}`,
                error: error.message
              })
              break
            default:
              res.status(500).json({
                msg: 'Error en el servidor',
                error: error.message
              })
          }
        } else {
          return res.status(500).json({
            msg: 'Error en el servidor',
            error: error.message
          })
        }
      })
  } catch (error) {
    res.status(500).json({
      msg: 'Error en el servidor',
      error: error.message
    })
  }
}

// // Función que trae personas de limpieza por sexo (req.query)
const getLimpiezaBySexo = (req = request, res = response) => {
  const { sexo = '' } = req.query

  // Verificamos que el parámetro 'sexo' esté presente
  if (!sexo) {
    return res.status(400).json({
      msg: 'El parámetro "sexo" es requerido',
      data: []
    })
  }
  try {
    axios.get('https://66e20a67c831c8811b5706cb.mockapi.io/api/v1/limpiezaDelHogar')
      .then((response) => {
        const { data = [] } = response

        // Normalizamos el sexo de la query
        const sexoFiltro = sexo.trim().toLowerCase()

        const personasPorSexo = data.filter(persona =>
          persona.sexo && persona.sexo.trim().toLowerCase() === sexoFiltro
        )

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
          msg: 'Error al tratar de obtener las personas de limpieza',
          error: error.message
        })
      })
  } catch (error) {
    res.status(500).json({
      msg: 'Error en el servidor',
      error: error.message
    })
  }
}

module.exports = {
  getLimpieza,
  getLimpiezaById,
  getLimpiezaBySexo
}

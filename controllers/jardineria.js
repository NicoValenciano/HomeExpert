const axios = require('axios')
const { request, response } = require('express')

// GET de jardineros

const getJardineros = (req = request, res = response) => {
  const { lastname = '', year = '', category = '', page = '' } = req.query
  console.log(lastname, year, category, page)

  // const filtro = (lastname) ? `?lastname=${lastname}` : ''

  try {
    // axios.get(`https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria${filtro}`)
    axios.get('https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria')
      .then((response) => {
        const { data = [] } = response
        // handle success
        res.status(200).json({
          msg: 'Ok',
          data
        })
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            // handle error 400
            case 400:
              res.status(400).json({
                msg: 'Bad Request',
                error: error.message
              })
              break
            // handle error 404
            case 404:
              res.status(404).json({
                msg: 'No se encontraron jardineros',
                error: error.message
              })
              break
            // handle error 500
            default:
              res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
              })
          }
        } else {
          // handle error 500
          res.status(500).json({
            msg: 'Internal Server Error',
            error: error.message
          })
        }
      })
  } catch (error) {
    // handle error 500
    console.error('Server error:', error)
    res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message
    })
  }
}

// GET de jardinero por Id

const getJardinero = (req = request, res = response) => {
  const { idJardinero = '' } = req.params
  console.log(idJardinero)

  try {
    axios.get(`https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria/${idJardinero}`)
      .then((response) => {
        const { data } = response
        // handle success
        res.status(200).json({
          msg: 'Ok',
          data
        })
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            // handle error 400
            case 400:
              res.status(400).json({
                msg: 'Bad Request',
                error: error.message
              })
              break
            // handle error 404
            case 404:
              res.status(404).json({
                msg: 'Jardinero no encontrado',
                error: error.message
              })
              break
            // handle error 500
            default:
              res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
              })
          }
        } else {
          // handle error 500
          res.status(500).json({
            msg: 'Internal Server Error',
            error: error.message
          })
        }
      })
  } catch (error) {
    // handle error 500
    console.error('Server error:', error)
    res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message
    })
  }
}

// GET de jardinero con filtro por nombre, servicios, precio, ciudad, id y/o calificacion (se pueden concatenar)

const getJardineroFiltro = (req = request, res = response) => {
  const { nombre = '', servicios = '', precio = '', ciudad = '', id = '', calificacion = '' } = req.query
  console.log(nombre, servicios, precio, ciudad, id, calificacion)

  const filtros = Object.entries({ nombre, servicios, precio, ciudad, id, calificacion })
    .filter(([key, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')

  try {
    axios.get(`https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria${filtros ? `?${filtros}` : ''}`)
      .then((response) => {
        const { data = [] } = response
        // handle success
        res.status(200).json({
          msg: 'Ok',
          data
        })
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            // handle error 400
            case 400:
              res.status(400).json({
                msg: 'Bad Request',
                error: error.message
              })
              break
              // handle error 404
            case 404:
              res.status(404).json({
                msg: 'No se encontraron jardineros con ese filtro',
                error: error.message
              })
              break
              // handle error 500
            default:
              res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
              })
          }
        } else {
          // handle error 500
          res.status(500).json({
            msg: 'Internal Server Error',
            error: error.message
          })
        }
      })
  } catch (error) {
    // handle error 500
    console.error('Server error:', error)
    res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message
    })
  }
}

module.exports = {
  getJardinero,
  getJardineros,
  getJardineroFiltro
}

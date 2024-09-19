const axios = require('axios')
const { request, response } = require('express')

// GET de jardineros

const getJardineros = (req = request, res = response) => {
  const { lastname = '', year = '', category = '', page = '' } = req.query
  console.log(lastname, year, category, page)

  const filtro = (lastname) ? `?lastname=${lastname}` : ''

  axios.get(`https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria${filtro}`)
    .then((response) => {
      const { data = [] } = response
      // handle success
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

// GET de jardinero por Id

const getJardinero = (req = request, res = response) => {
  const { idJardinero = '' } = req.params
  console.log(idJardinero)

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
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

// GET de jardinero con filtro

const getJardineroFiltro = (req = request, res = response) => {
  const { nombre = '', foto = '', servicios = '', precio = '', ciudad = '', id = '' } = req.query
  console.log(nombre, foto, servicios, precio, ciudad, id)

  const filtro = (nombre) ? `?nombre=${nombre}` : ''

  axios.get(`https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria${filtro}`)
    .then((response) => {
      const { data = [] } = response
      // handle success
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
    // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getJardinero,
  getJardineros,
  getJardineroFiltro
}

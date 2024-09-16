const axios = require('axios')
const { request, response } = require('express')

const getJardineros = (req = request, res = response) => {
  const { lastname = '', year = '', category = '', page = '' } = req.query
  console.log(lastname, year, category, page)

  const filtro = (lastname) ? `?lastname=${lastname}` : ''

  axios.get(`https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria${filtro}`)
    .then((response) => {
      const { data = [] } = response
      // handle success
      // console.log(data);

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

// eslint-disable-next-line no-unused-vars
const getJardineroId = (req = request, res = response) => {
  const { idJardinero } = req.params
  console.log(idJardinero)

  axios.get('https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria')
    .then((response) => {
      const { data } = response

      const newArray = data.filter(item => item.id === idJardinero)
      // handle success
      // console.log(data);

      res.status(200).json({
        msg: 'Ok',
        data: newArray
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

const getJardinero = (req = request, res = response) => {
  const { idJardinero = '' } = req.params
  console.log(idJardinero)

  axios.get(`https://66d25ca4184dce1713cd6d59.mockapi.io/api/v1/Jardineria/${idJardinero}`)
    .then((response) => {
      const { data } = response
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
  getJardineros
}

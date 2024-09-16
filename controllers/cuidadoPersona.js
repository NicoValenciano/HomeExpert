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

module.exports = {
  getCuidadores
}

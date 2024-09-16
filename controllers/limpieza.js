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
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getLimpieza
}

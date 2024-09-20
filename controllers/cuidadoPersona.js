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

  axios.get(`https://66e20943c831c8811b5703f6.mockapi.io/cuidadoresPersonas/${idCuidador}`)
    .then((response) => {
      const { data } = response
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

const getCuidadoresPorCalificacion = async (req = request, res = response) => {
  const { calificacion } = req.params;  

  try {
    const response = await axios.get('https://66e20943c831c8811b5703f6.mockapi.io/cuidadoresPersonas');
    let personas = response.data;

    if (calificacion) {
      personas = personas.filter(persona => 
        persona.calificacion >= parseInt(calificacion, 10) && persona.disponibilidad === true
      );
    } else {
      personas = personas.filter(persona => persona.disponibilidad === true);
    }

    res.status(200).json({
      msg: 'Ok',
      data: personas
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener la información',
      error: error.message
    });
  }
};


module.exports = {
  getCuidadores,
  getCuidadoresPorId,
  getCuidadoresPorCalificacion
}

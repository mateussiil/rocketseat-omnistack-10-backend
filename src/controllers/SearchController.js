const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response){
    // Buscar todos os devs num 10km
    // Filtrar por tecnologia 

    const { techs, latitude, longitude } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs:{
        $in: techsArray, //Pesquisa se existe em techs  os indeces de techsArray
      },
      location:{
        $near: { //pesquisa os proximos
          $geometry:{
            type:'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance:10000, //perto de 10000m
        },
      },
    });

    return response.json({ devs });

  }
}
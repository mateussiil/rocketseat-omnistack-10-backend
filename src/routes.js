const { Router } = require('express');
const axios = require('axios');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index); //busca todos os dev

routes.get('/search', SearchController.index);//busca por tecnologia

module.exports = routes;


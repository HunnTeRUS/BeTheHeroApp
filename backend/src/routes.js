const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController= require('./controllers/sessionController');

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.listAll);
routes.get('/profiles', profileController.index);


routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController .listAll);
routes.delete('/incidents/:id', incidentController.delete);

routes.post('/sessions', sessionController.create);

module.exports = routes;
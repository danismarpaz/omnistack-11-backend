const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Rota / Recurso

// Metodos HTTP:
// GET: Buscar uma informação  do back-end
// POST: Criar uma informação no back-end
// PUT: Atualizar uma informação no back-end
// DELETE: Apagar uma informação no back-end

/**
 * Tipos de parâmentros:
 * 
 * Query Params: Parâmetros nomeados enviados através da rota após o "?" (Serve para filtros, paginação);
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição , utilizado para criar ou editar recursos;
 */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
const express = require('express');

const musicianController = require("./controllers/musicianController");
const bandController = require("./controllers/bandController");
const eventController = require("./controllers/eventController");
const specificController = require("./controllers/specificController");
const sessionController = require("./controllers/sessionController");

const routes = express.Router()

//routes session
routes.post('/session', sessionController.create);

// routes musician
routes.get('/musician', musicianController.list); 
routes.get('/musician/perfil', musicianController.unique); 
routes.post('/musician' ,musicianController.create);
routes.put('/musician' ,musicianController.update);
routes.delete('/musician/:musician_id' ,musicianController.delete);

//routes band
routes.get('/band', bandController.list);
routes.post('/band' ,bandController.create);
routes.put('/band/:id' ,bandController.update);
routes.delete('/band' ,bandController.delete);

//routes event
routes.get('/event', eventController.list);
routes.post('/event', eventController.create);
routes.delete('/event/:id', eventController.delete);

//reoutes listSpecific
routes.get('/specific', specificController.list);

module.exports = routes;
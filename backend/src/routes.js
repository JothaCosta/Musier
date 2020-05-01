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
routes.post('/musician' ,musicianController.create);

//routes band

//routes event
routes.get('/event', eventController.list);
routes.post('/event', eventController.create);

//reoutes listSpecific
routes.get('/specific', specificController.list);

module.exports = routes;
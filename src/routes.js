const express = require('express');

const routes = express.Router()

routes.get('/' ,(request, response) => {
    return response.json({
        nome:"oi",
        idade: 14
    });
});


module.exports = routes;
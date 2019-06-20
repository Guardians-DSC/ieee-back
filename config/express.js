const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = function () {
    const app = express();
    
    app.set('port', process.env.PORT || 8080);
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());

    return app
};

/*
TODO: Refatorar para que app seja encapsulado em uma função 
*/
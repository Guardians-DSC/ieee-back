const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

module.exports = app;

/*
TODO: Refatorar para que app seja encapsulado em uma função 
*/
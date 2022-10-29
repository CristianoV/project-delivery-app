const express = require('express');
const clientController = require('../controller/clientController');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/products', clientController.getAllProducts);

module.exports = app;

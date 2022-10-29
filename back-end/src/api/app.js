const express = require('express');
const clientController = require('../controller/clientController');

const app = express();

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/products', clientController.getAllProducts);

module.exports = app;

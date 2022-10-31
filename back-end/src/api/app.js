const express = require('express');
const loginController = require('../controller/login');
const registerController = require('../controller/register');
const clientController = require('../controller/clientController');

const app = express();
app.use(express.json());

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/products', clientController.getAllProducts);

app.post('/login', loginController.login);
app.post('/register', registerController.register);

module.exports = app;

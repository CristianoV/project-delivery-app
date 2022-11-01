const express = require('express');
const cors = require('cors');
const loginController = require('../controller/login');
const registerController = require('../controller/register');
const clientController = require('../controller/clientController');
const { validateToken } = require('../middleware/validateToken');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/products', validateToken, clientController.getAllProducts);

app.post('/login', loginController.login);
app.post('/register', registerController.register);

module.exports = app;

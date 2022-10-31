const express = require('express');
const loginController = require('../controller/login');
const registerController = require('../controller/register');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', loginController.login);
app.post('/register', registerController.register);

module.exports = app;

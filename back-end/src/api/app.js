const express = require('express');
const cors = require('cors');
const loginController = require('../controller/login');
const registerController = require('../controller/register');
const clientController = require('../controller/clientController');
const userController = require('../controller/userController');
const salesController = require('../controller/salesController');
const { validateToken } = require('../middleware/validateToken');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/products', validateToken, clientController.getAllProducts);

app.post('/login', loginController.login);
app.post('/register', registerController.register);

app.get('/user/orders/:id', validateToken, salesController.selectAllSalesByUserId);
app.get('/users/sellers', validateToken, userController.getSellers);
app.get('/users', validateToken, userController.getUsers);
app.post('/users', validateToken, userController.createUser);
app.delete('/users/:id', validateToken, userController.deleteUser);

app.post('/sales', validateToken, salesController.createSale);
app.get('/sales', validateToken, salesController.getSales);
app.get('/sales/:id', validateToken, salesController.getSalesById);
app.put('/sales/:id', validateToken, salesController.updateSaleStatus);

module.exports = app;

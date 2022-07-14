const {Router} = require('express');
const rutas = Router();

const {login, register, carrito} = require('../controllers/users'); 
rutas.get('/login',login);
rutas.get('/register',register);
rutas.get('/cart',carrito);

module.exports = rutas
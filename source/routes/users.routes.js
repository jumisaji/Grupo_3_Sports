const {Router} = require('express');
const rutas = Router();

const {login, register, carrito,creacion,edicion} = require('../controllers/users'); 
rutas.get('/login',login);
rutas.get('/register',register);
rutas.get('/cart',carrito);
rutas.get('/create',creacion);
rutas.get('/edit',edicion);

module.exports = rutas
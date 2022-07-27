const {Router} = require('express');
const rutas = Router();

const {login, register} = require('../controllers/users'); 

rutas.get('/login',login);
rutas.get('/register',register);


module.exports = rutas
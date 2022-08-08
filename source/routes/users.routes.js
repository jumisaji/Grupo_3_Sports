const {Router} = require('express');
const rutas = Router();

const {login, register, process, access} = require('../controllers/users.controller'); 
const middlewareRegister = require('../middlewares/register');
const middlewareLogin = require('../middlewares/login');

rutas.get('/register',register);
rutas.post('/register', middlewareRegister ,process);
rutas.get('/login', login);
rutas.post('/access', middlewareLogin ,access);

module.exports = rutas
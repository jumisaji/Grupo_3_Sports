const {Router} = require('express');
const rutas = Router();

const {login, register, process, access, logout} = require('../controllers/users.controller'); 
const middlewareRegister = require('../middlewares/register');
const middlewareLogin = require('../middlewares/login');
const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin');

rutas.get('/register',register);
rutas.post('/register', middlewareRegister ,process);
rutas.get('/login' ,login);
rutas.post('/access', middlewareLogin ,access);
rutas.get('/logout',[isLogged],logout)

module.exports = rutas
const {Router} = require('express');
const rutas = Router();

const {login, register, process, access} = require('../controllers/users.controller'); 
const middlewareRegister = require('../middlewares/register');

rutas.get('/register',register);
rutas.post('/register', middlewareRegister ,process);
rutas.get('/login', login);

module.exports = rutas
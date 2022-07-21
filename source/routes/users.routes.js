const {Router} = require('express');
const rutas = Router();
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({storage: storage('users')});

const {login, register, carrito, creacion, edicion, save } = require('../controllers/users'); 

rutas.get('/login',login);
rutas.get('/register',register);
rutas.get('/cart',carrito);
rutas.get('/create',creacion);
rutas.post('/save',[upload.any()], save)


module.exports = rutas
const {Router} = require('express');
const rutas = Router();
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({storage: storage('users')});

const {login, register, carrito, create, edit, save, modify, destroid } = require('../controllers/users'); 

rutas.get('/login',login);
rutas.get('/register',register);
rutas.get('/cart',carrito);
rutas.get('/create', create)
rutas.post('/save',[upload.any()], save)
rutas.get('/edit/:id', edit)
rutas.put('/edit/:id',[upload.any()], modify)
rutas.delete('/delete/:id',destroid)


module.exports = rutas
const {Router} = require('express');
const rutas = Router();
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({storage: storage('products')});
const {bikes, detalle, carrito, create, edit, save, modify, destroid} = require('../controllers/products.controller');
const isLogged = require('../middlewares/isLogged');
const isadmin = require('../middlewares/isAdmin');
const middlewareProducts = require('../middlewares/products');
//const { ValidationError } = require('sequelize/types');

rutas.get('/',bikes);
rutas.get('/productDetail/:id',detalle);
rutas.get('/cart', [isLogged] ,carrito);
rutas.get('/create',[isLogged, isadmin], create);
rutas.post('/save',[upload.any(), middlewareProducts], save);
rutas.get('/edit/:id',[isLogged, isadmin], edit);
rutas.put('/edit/:id',[upload.any(), middlewareProducts], modify);
rutas.delete('/delete/:id',destroid);


module.exports = rutas
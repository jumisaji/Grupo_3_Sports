const {Router} = require('express');
const rutas = Router();
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({storage: storage('products')});
const {bikes, detalle, carrito, create, edit, save, modify, destroid} = require('../controllers/products');
const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin');
rutas.get('/',bikes);
rutas.get('/productDetail/:id',detalle);
rutas.get('/cart', [isLogged] ,carrito);
rutas.get('/create',[isLogged, isAdmin], create);
rutas.post('/save',[upload.any()], save);
rutas.get('/edit/:id',[isLogged, isAdmin], edit);
rutas.put('/edit/:id',[upload.any()], modify);
rutas.delete('/delete/:id',destroid);


module.exports = rutas
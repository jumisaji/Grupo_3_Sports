const {Router} = require('express');
const rutas = Router();
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({storage: storage('products')});
let {index, detalle} = require('../controllers/products');
rutas.get('/',index);
rutas.get('/productDetail/:id',detalle);


module.exports = rutas
const {Router} = require('express');
const rutas = Router();
const multer = require('multer');

const {ruta, bmx, mtb, urban, detalle, creacion, edicion} = require('../controllers/products');
rutas.get('/ruta',ruta);
rutas.get('/bmx',bmx);
rutas.get('/mtb',mtb);
rutas.get('/urban',urban);
rutas.get('/productDetail',detalle);


module.exports = rutas
const {Router} = require('express');
const rutas = Router();

const {ruta, bmx, mtb, urban, detalle, creacion, edicion} = require('../controllers/products');
rutas.get('/route',ruta);
rutas.get('/bmx',bmx);
rutas.get('/mtb',mtb);
rutas.get('/urban',urban);
rutas.get('/productDetail',detalle);
rutas.get('/create',creacion);
rutas.get('/edit',edicion);

module.exports = rutas
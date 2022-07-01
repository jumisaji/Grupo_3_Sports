const {Router} = require('express');
const rutas = Router();

const {ruta, bmx, mtb, urban, detalle, creacion, edicion} = require('../controllers/products');
rutas.get('/ruta',ruta);
rutas.get('/bmx',bmx);
rutas.get('/mtb',mtb);
rutas.get('/urban',urban);
rutas.get('/productoDetalle',detalle);
rutas.get('/creacion',creacion);
rutas.get('/edicion',edicion);

module.exports = rutas
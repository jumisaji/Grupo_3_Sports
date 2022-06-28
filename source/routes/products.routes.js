const {Router} = require(express);
const rutas = Router();


const {ruta} = require('../controllers/products');
const {bmx} = require('../controllers/products');
const {mtb} = require('../controllers/products');
const {urban} = require('../controllers/products');
const {detalle} = require('../controllers/products');
rutas.get('/ruta',ruta);
rutas.get('/bmx',bmx);
rutas.get('/mtb',mtb);
rutas.get('/urban',urban);
rutas.get('/productoDetalle',detalle);

module.exports = rutas
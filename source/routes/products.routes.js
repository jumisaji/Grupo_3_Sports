const {Router} = require(express);
const rutas = Router();


const {ruta, bmx, mtb, urban, detalle} = require('../controllers/products');
rutas.get('/ruta',ruta);
rutas.get('/bmx',bmx);
rutas.get('/mtb',mtb);
rutas.get('/urban',urban);
rutas.get('/productoDetalle',detalle);

module.exports = rutas
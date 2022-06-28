const {Router} = require(express);
const rutas = Router();


const {ruta} = require('../controllers/products');
const {bmx} = require('../controllers/products');
const {mtb} = require('../controllers/products');
const {urban} = require('../controllers/products');
const {detalle} = require('../controllers/products');
rutas.get('/',ruta);
rutas.get('/',bmx);
rutas.get('/',mtb);
rutas.get('/',urban);
rutas.get('/',detalle);

module.exports = rutas
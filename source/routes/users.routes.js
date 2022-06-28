const {Router} = require(express);
const rutas = Router();

const {login} = require('../controllers/users');
const {register} = require('../controllers/users');
const {carrito} = require('../controllers/users');
rutas.get('/',login);
rutas.get('/',register);
rutas.get('/',carrito);

module.exports = rutas
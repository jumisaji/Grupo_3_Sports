const {Router} = require(express);
const rutas = Router();

const {home} = require('../controllers/main');
rutas.get('/',home);

module.exports = rutas
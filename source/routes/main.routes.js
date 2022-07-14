const {Router} = require('express');
const rutas = Router();

const {home, head, header, bodywhapp, footer} = require('../controllers/main');
rutas.get('/',home);

module.exports = rutas
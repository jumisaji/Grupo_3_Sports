const {Router} = require('express');
const rutas = Router();

const {home, head, header, bodywhapp, footer} = require('../controllers/main');
rutas.get('/',home);
rutas.get('./includes/head',head);
rutas.get('./includes/header',header);
rutas.get('./includes/bodywhapp',bodywhapp);
rutas.get('./includes/footer',footer);

module.exports = rutas
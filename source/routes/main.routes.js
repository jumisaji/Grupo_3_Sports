const {Router}= require("express")
const rutas = Router()		

let { home } = require ('../controllers/main.controller');
rutas.get("/", home)
module.exports = rutas
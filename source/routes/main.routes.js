const {Router}= require("express")
const rutas = Router()		

let { home } = require ('../controllers/main');
rutas.get("/", home)
module.exports = rutas
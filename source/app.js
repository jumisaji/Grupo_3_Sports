//config
const express = require('express');
const {resolve} = require('path')
const method = require('method-override')
const server = express();
const {port,start} = require( "./modules/port")
const uploads = require("./modules/uploads");
const public = require("./modules/public")
const { publicDecrypt } = require('crypto');
server.listen(port,start()); 


server.use(uploads);
server.use(public);
server.use(express.urlencoded({extended:false})); //  req.body y el req.query
server.use(express.json()) //permite procesar datos que vengan en formato json
server.use(method('m')); // En la url poner ?m= metodo, como DELETE
//rutas

//vistas
server.use(require("./routes/main.routes"))
server.use('/products',require('./routes/products.routes'))
server.use('/users',require('./routes/users.routes'))
//ejs
server.set('views', resolve(__dirname, 'views'));   
server.set('view engine','ejs');

server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));
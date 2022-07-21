//config
const express = require('express');
const {resolve} = require('path')
const method = require('method-override')
const server = express();
const {port,start} = require( "./modules/port")
const uploads = require("./modules/uploads")
server.listen(port,start()); 


server.use (uploads);
server.use(express.urlencoded({extended:false})); //  req.body y el req.query
server.use(express.json())
server.use(method('m')); // En la url poner ?m=DELETE
//rutas
server.use(require('./modules/public'));
server.use(require('./routes/main.routes'));
server.use(require('./routes/products.routes'));
server.use(require('./routes/users.routes'));
//vistas
server.use(require("./routes/main.routes"))
server.use('/products',require('./routes/products.routes'))
server.use('/users', require('./routes/users.routes'))
//ejs
server.set('views', resolve(__dirname, 'views'));   
server.set('view engine','ejs');

server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));
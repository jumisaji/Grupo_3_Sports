//config
const express = require('express');
const {resolve} = require('path')
const server = express();
const {port,start} = require( "./modules/port")
const uploads = require("./modules/uploads")
server.listen(port,start()); 
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
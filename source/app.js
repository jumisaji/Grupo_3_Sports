//config
const express = require('express');
const {resolve} = require('path')
const server = express();
const {port,start} = require( "./modules/port")
server.listen(port,start()); 
//rutas
server.use(require("./modules/public"));
server.use(require('./routes/main.routes'));
server.use(require('./routes/products.routes'));
server.use(require('./routes/users.routes'));
//vistas
server.get('/');
server.get('/route');
server.get('/bmx');
server.get('/mtb');
server.get('/urban');
server.get('/login');
server.get('/cart');
server.get('/register');
server.get('/productDetail');
server.get('/create');
server.get('/edit');

//ejs
server.set('views', resolve(__dirname, 'views'));   
server.set('view engine','ejs');

server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));

const express = require('express');
const {port,start} = require( "./modules/port")
const server = express();
server.listen(port,start()); 
server.use(require("./modules/public"))


server.get('/',)
server.get('/ruta',)
server.get('/bmx',)
server.get('/mtb',)
server.get('/urban',)
server.get('/login',)
server.get('/carrito',)
server.get('/register',)
server.get('/productoDetalle',)


server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));
//config
const express = require('express');
const server = express();
const {port,start} = require( "./modules/port")
server.listen(port,start()); 
//rutas
server.use(require("./modules/public"))
server.use(require('./routes/main.routes'))
server.use(require('./routes/products.routes'))
server.use(require('./routes/users.routes'))
server.get('/')
server.get('/ruta')
server.get('/bmx')
server.get('/mtb')
server.get('/urban')
server.get('/login')
server.get('/carrito')
server.get('/register')
server.get('/productoDetalle')
//controladores

//ejs
server.set('views', resolve(__dirname, 'views'));   
server.set('view engine','ejs');


server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));
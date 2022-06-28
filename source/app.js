
const express = require('express');
const {port,start} = require( "./modules/port")
const server = express();
server.listen(port,start()); 
server.use(require("./modules/public"))


server.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views/home.html')))
server.get('/ruta', (req,res) => res.sendFile(path.resolve(__dirname, '../views/ruta.html')))
server.get('/bmx', (req,res) => res.sendFile(path.resolve(__dirname, '../views/bmx.html')))
server.get('/mtb', (req,res) => res.sendFile(path.resolve(__dirname, '../views/mtb.html')))
server.get('/urban', (req,res) => res.sendFile(path.resolve(__dirname, '../views/urban.html')))
server.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, '../views/login.html')))
server.get('/carrito', (req,res) => res.sendFile(path.resolve(__dirname, '../views/carrito.html')))
server.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, '../views/register.html')))
server.get('/productoDetalle', (req,res) => res.sendFile(path.resolve(__dirname, '../views/productoDetalle.html')))


server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));
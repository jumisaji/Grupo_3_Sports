
const path = require('path');
const express = require('express');
const server = express();

const port = process.env.PORT || 2022;
server.listen(port, () => console.log('Abriendo el servidor http://localhost:'+port));

const public = path.resolve(__dirname, '../public');

server.use(express.static(public));

server.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views/home.html')))
server.get('/ruta', (req,res) => res.sendFile(path.resolve(__dirname, '../views/ruta.html')))
server.get('/bmx', (req,res) => res.sendFile(path.resolve(__dirname, '../views/bmx.html')))
server.get('/mtb', (req,res) => res.sendFile(path.resolve(__dirname, '../views/mtb.html')))
server.get('/urban', (req,res) => res.sendFile(path.resolve(__dirname, '../views/urban.html')))
server.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, '../views/login.html')))

server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));
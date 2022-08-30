//config
const express = require('express');
const {resolve} = require('path');
const method = require('method-override');
const session = require('express-session');
const { publicDecrypt } = require('crypto');
const cookieParser = require ("cookie-parser");
const recordameMiddleware = require("./middlewares/recordameMiddleware")

//modules
const {port,start} = require( "./modules/port")
const uploads = require("./modules/uploads");
const public = require("./modules/public")

const server = express();

server.listen(port,start()); 

//ejs
server.set('views', resolve(__dirname, 'views'));   
server.set('view engine','ejs');

server.use(uploads);
server.use(public);
server.use(express.urlencoded({extended:false})); //  req.body y el req.query
server.use(express.json()) //permite procesar datos que vengan en formato json
server.use(cookieParser()) //permite procesar datos que vengan en formato cookieParser
server.use(recordameMiddleware)
server.use(method('m')); // En la url poner ?m= metodo, como DELETE
server.use(session({
    secret:'sessionSecret',
    saveUninitialized:true,
    resave:true
  })) // req.session

server.use(require('./middlewares/user'))

server.use(require("./routes/main.routes"))
server.use('/products',require('./routes/products.routes'))
server.use('/users',require('./routes/users.routes'))


server.get('/', (req,res) => res.send('Bienvenid@ a Go Bike'));
const port = process.env.PORT || 2022;
const express = require('express');

const start=() => console.log('Abriendo el servidor http://localhost:'+port);
module.exports ={port,start}
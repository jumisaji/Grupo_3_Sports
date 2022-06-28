const port = process.env.PORT || 2022;
const start=() => console.log('Abriendo el servidor http://localhost:'+port);
module.exports ={port,start}
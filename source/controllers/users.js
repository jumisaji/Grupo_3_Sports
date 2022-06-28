const {resolve} = require('path')
module.exports ={

login:function(req,res){ let file = resolve(__dirname, '../views/login.html') 
res.sendFile(file)},


register:function(req,res){ let file = resolve(__dirname, '../views/register.html') 
res.sendFile(file)},

carrito: function(req,res){ let file = resolve(__dirname, '../views/carrito.html') 
res.sendFile(file)}


}
const {resolve} = require('path')
module.exports = { 
    
ruta:function(req,res){ let file = resolve(__dirname, '../views/ruta.html')
res.sendFile(file)},

bmx:function(req,res){ let file = resolve(__dirname, '../views/bmx.html')
res.sendFile(file)},

mtb: function(req,res){ let file = resolve(__dirname, '../views/mtb.html')
res.sendFile(file)},

urban: function(req,res){let file = resolve(__dirname, '../views/urban.html')
res.sendFile(file)} ,
    
detalle: function(req,res){ let file = resolve(__dirname, '../views/productoDetalle.html') 
res.sendFile(file)}

}
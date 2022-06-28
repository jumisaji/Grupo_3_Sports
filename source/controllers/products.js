const {resolve} = require('path')




module.exports = { 
    
ruta:(req,res) => res.sendFile(path.resolve(__dirname, '../views/ruta.html')),

bmx:(req,res) => res.sendFile(path.resolve(__dirname, '../views/bmx.html')),

mtb:(req,res) => res.sendFile(path.resolve(__dirname, '../views/mtb.html')),

urban:(req,res) => res.sendFile(path.resolve(__dirname, '../views/urban.html')),
    
detalle:(req,res) => res.sendFile(path.resolve(__dirname, '../views/productoDetalle.html'))

}
const {app,one,} = require('../models/products.model');
const lista = {
    app: (req,res) =>{

        let products = app();
    
        if(req.query && req.query.name){
          products = products.filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
        }
        return res.render('products/bikes_category',{
          title: 'List of products',
          products: products
        })
      },
    detalle: (req, res) => {
        let product = one(parseInt(req.params.id))
    
        if(!product){
          return res.redirect('/products/')
        }
        return res.render('products/productDetail/'+product.id, {
          title: 'Detail of products',
          product: product 
        })
      },
}
const controller = {
    bmx: (req,res) => res.render('bmx', {
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),
    

    mtb: (req,res) => res.render('mtb',{
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    ruta: (req,res) => res.render('ruta', {
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    urban: (req,res) => res.render('urban',{
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    detalle: (req,res) => res.render('productDetail', {
        styles: ['styles_productDetail', 'animations_productDetail', 'media_queries_productDetail']
    }),

};
module.exports = controller, lista
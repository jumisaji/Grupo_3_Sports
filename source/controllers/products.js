const {index,one,create,write} = require('../models/products.model');
module.exports = {
  detalle: (req, res) => {
    let product = one(parseInt(req.params.id))

    if(!product){
      return res.redirect('/products/')
    }
    return res.render('products/productDetail', {
      title: 'Detail of products',
      product: product,
      styles: ['styles_productDetail', 'animations_productDetail', 'media_queries_productDetail']
    })
  },
  index: (req,res) =>{

      let products = index();
  
      if(req.query && req.query.name){
        products = products.filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
      }
      return res.render('products/bikes_category',{
        title: 'List of products',
        products: products,
        styles: ['styles_main_bikes', 'media_queries_main_bikes', 'animations_main_bikes'],
      })
    },
};
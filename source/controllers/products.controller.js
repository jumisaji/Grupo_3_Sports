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
      styles: ["styles_body",'styles_productDetail', 'animations_productDetail', 'media_queries_productDetail']
    })
  },
  bikes: (req,res) =>{

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
  carrito: (req,res) => {
      return res.render('products/cart', {
        styles: ['styles_cart', 'animations_cart', 'media_queries_cart']
    })
    },
    
  create: (req,res) => {
        return res.render('products/create', {
          title: 'Create Product',
          styles: [ "validaciones-frontend",'styles_create', ]
        })
      },
  save: (req, res) => {
        req.body.image = req.files[0].filename
        let newProduct = create(req.body)
        let products = index();
        products.push(newProduct)
        write(products)
        return res.redirect('/products/')
      },
  edit:(req,res) => {
        let product = one(parseInt(req.params.id))
        if(!product){
          return res.redirect('/products/')
        }
        if (res.render('products/edit', {
          title: 'Edit of products',
          product:product,
          styles: ['styles_edit']
        })){
          return res.redirect('/products/')
        }
        
      },
  modify: (req, res) => {
        let product = one(parseInt(req.params.id))
        let products = index();
        let productsModified = products.map(p =>{ 
          if(p.id == product.id){
            p.name =  req.body.name
            p.description = req.body.description
            p.price = parseInt(req.body.price)
            p.image = req.files && req.files.length > 0 ? req.files[0].filename : p.image
          }
          return p 
        });
        write(productsModified)
        return res.redirect('/products/')
      },
  destroid:(req,res) => {
        let product = one(parseInt(req.params.id))
        if(!product){
          return res.redirect('/products/');
        }
        let products = index();
        let productsDeleted = products.filter(p => p.id !== product.id)
        write(productsDeleted)
        return res.redirect('/products/');
      }
};
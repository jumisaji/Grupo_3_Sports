const {app,one,create,write} = require('../models/products.model');
module.exports = {
  login: (req,res) => res.render('login', {
      styles: ['styles_login', 'animations_login', 'media_queries_forms']
  }),

  register: (req,res) => res.render('register', {
      styles: ['styles_register', 'animations_register', 'media_queries_forms']
  }),

  carrito: (req,res) => res.render('cart', {
      styles: ['styles_cart', 'animations_cart', 'media_queries_cart']
  }),
  edicion: (req,res) => res.render('edit', {
      styles: [ 'styles_edit' ]
  }),
  create: (req,res) => {
      return res.render('users/create', {
        title: 'Create Product',
        styles: ['styles_create', ]
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
      return res.render('products/edit', {
        title: 'Edit of products',
        product:product 
      })
    }
};
const {app,one,create,write} = require('../models/products.model');
module.exports = {
  login: (req,res) => {
    return res.render('users/login', {
      styles: ['styles_login', 'animations_login', 'media_queries_forms']
  })
  },

  register: (req,res) => {
    return res.render('users/register', {
      styles: ['styles_register', 'animations_register', 'media_queries_forms']
  })
  },

  carrito: (req,res) => {
    return res.render('users/cart', {
      styles: ['styles_cart', 'animations_cart', 'media_queries_cart']
  })
  },
  
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
      return res.redirect('/products/detail/' + product.id)
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
const {validationResult} = require('express-validator');
const {index,one,write} = require('../models/products.model');
const {products} = require('../database/models/index');
module.exports = {
  detalle: async ( req , res) => {
    let productDB = await products.findByPk(req.params.id,{include:{all:true}})

    if(!productDB){
      return res.redirect('/products/')
    }
    return res.render('products/productDetail', {
      title: 'Detail of products',
      styles: ["styles_body",'styles_productDetail', 'animations_productDetail', 'media_queries_productDetail'],
      products: productDB
    })
  },
  bikes: async ( req , res ) =>{

    let product = await products.findAll({include:{all:true}});

    if(req.query && req.query.name){
      product = product.filter(products => products.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
    }
    return res.render('products/bikes_category',{
      title: 'List of products',
      products: product,
      styles: ['styles_main_bikes', 'media_queries_main_bikes', 'animations_main_bikes'],
    })
  },
  carrito: async (req,res) => {
      return res.render('products/cart', {
        styles: ['styles_cart', 'animations_cart', 'media_queries_cart']
    })
    },
    
  create: async (req,res) => {
        return res.render('products/create', {
          title: 'Create Product',
          styles: [ "validaciones-frontend",'styles_create', ]
        })
      },
  save: async (req , res) => {
    let validaciones = validationResult(req)
    let {errors} = validaciones
    if(errors && errors.length > 0){
      return res.render('products/create',{
        styles:['styles_create'],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }
    if(req.files && req.files.length > 0){
      req.body.imageid = req.files[0].filename
    }
    let nuevoProducto = await products.create(req.body)
    return res.redirect('/products/')
  },
  edit: async ( req , res ) => {
    let productDB = await products.findByPk(req.params.id,{include:{all:true}})
    if(!productDB){
      return res.redirect('/products/')
    }
        if (res.render('products/edit', {
          title: 'Edit of products',
          products:productDB,
          styles: ["validaciones-frontend",'styles_edit']
        })){
          return res.redirect('/products/')
        }
        
      },
  modify: async (req, res) => {
    let productDB = await products.findByPk(req.params.id,{include:{all:true}})

    await productDB.update({
      name :  req.body.name,
      description : req.body.description,
      price : parseInt(req.body.price),
      image: req.body.image //no funciona el update de la imagen.
    })
    
    return res.redirect('/products/productDetail/' + products.id)
  },
  destroid: async ( req , res ) => {
    let productDB = await products.findByPk(req.body.product,{include:{all:true}})
    if(!productDB){
      return res.redirect('/products/');
    }
    
    await product.destroy({where:{
      id: productDB.id
    }})
    
    //await productDB.destroy()
    return res.redirect('/products/');
  }
}
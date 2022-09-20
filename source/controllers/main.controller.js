//const {Product} = require('../database/models/index')
const {index} = require('../models/products.model')
module.exports = {
    home: (req,res) =>{
        return res.render('home',{
        title: 'Home',
        products: index(),
        styles: ['styles_main_home', 'animations_main_home', 'media_queries_main_home']   
        });
    },
    
};



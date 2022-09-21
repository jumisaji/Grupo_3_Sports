const {index} = require('../models/products.model')
module.exports = {
    home: async (req,res) =>{
        //let products = Product.findAll()
        return res.render('home',{
        title: 'Home',
        products: index(),
        styles: ['styles_main_home', 'animations_main_home', 'media_queries_main_home']   
        });
    },
    
};



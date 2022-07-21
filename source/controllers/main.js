const {index} = require('../models/products.model')
module.exports = {
    home: (req,res) =>{
        return res.render('index',{
        title: 'Home',
            products: index().filter(e => e.price > 2000)
        });
    },
};

const { readFileSync, writeFileSync} = require('fs');
const {resolve} = require('path');

const model = {
    index: function(){
        let file = resolve(__dirname,'../data','bikes.json');// index==findAll({includes:{all:true}})
        let data = readFileSync(file);
        return JSON.parse(data);
      },
    one:function(id){ // one==findOne({where:{ ??? },includes:{all:true}}) || one==findByPk(req.params.id,{includes:{all:true}})
        let file = resolve(__dirname,'../data','bikes.json');
        let data = readFileSync(file);
        let products = JSON.parse(data);
        return products.find(product => product.id === id)
      },
    create: function(data){ // No utilizar, cambiar por el create de sequelize Product.create({})
        let file = resolve(__dirname,'../data','bikes.json');
        let info = readFileSync(file);
        let products = JSON.parse(info);
        let lastProduct= products[products.length - 1];
        return Object({
          id: products.length == 0 ? 1 : lastProduct.id + 1,
          name: data.name,
          price: parseInt(data.price),
          description: data.description,
          imageid: data.imageid,
          category: data.category,
          color: data.color
        })
      },
    write: function(data) { // No usar, cambiar por modify() o destroy()
        let file = resolve(__dirname,'../data','bikes.json');
        let info = JSON.stringify(data,null,2);
        return writeFileSync(file, info);
      },
    }
    
    module.exports = model;
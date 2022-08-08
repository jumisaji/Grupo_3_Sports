const { readFileSync, writeFileSync } = require('fs');
const {resolve} = require('path');

const model = {
    index: function(){
        let file = resolve(__dirname,'../data','users.json');
        let data = readFileSync(file);
        return JSON.parse(data);
      },
    create: function(data){
        let file = resolve(__dirname,'../data','users.json');
        let info = readFileSync(file);
        let products = JSON.parse(info);
        let lastProduct= products[products.length - 1];
        return Object({
          id: products.length == 0 ? 1 : lastProduct.id + 1,
          name: data.name,
          price: parseInt(data.price),
          description: data.description,
          image: data.image,
          category: data.category,
          color: data.color
        })
      },
    write: function(data) {
        let file = resolve(__dirname,'../data','users.json');
        let info = JSON.stringify(data,null,2);
        return writeFileSync(file, info);
      },
    }

module.exports = model;
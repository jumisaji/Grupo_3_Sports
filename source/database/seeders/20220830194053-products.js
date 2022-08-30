'use strict';
const {index} = require("../../models/products.model")
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('products',index(),  {});
   
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('products', null, {});
     
  }
};

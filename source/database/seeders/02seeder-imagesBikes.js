const {index} = require('../../models/product.model')
module.exports = {
  async up (queryInterface, Sequelize) {
    let imagesBikes = index().map(product =>{
      return Object({path: product.image}) 
    })
    await queryInterface.bulkInsert('imagesBikes', imagesBikes , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
   
  }
};
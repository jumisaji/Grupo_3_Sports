'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('favorites', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        productId: {
          type: Sequelize.INTEGER,
          allowNull: null,
          reference:{
            model:"products"
          }
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: null,
          reference:{
            model:"users"
          }
        }
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('favorites');
    
  }
};

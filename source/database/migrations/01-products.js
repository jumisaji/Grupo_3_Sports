"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("products", {
        id: {
          allownull: false,
          autoincrement: true,
          primarykey: true,
          type: Sequelize.INTEGER,
        },

        name: {
          type: Sequelize.STRING,
        },
        categories: {
          type: Sequelize.INTEGER,
        },
        prices: {
          type: Sequelize.INTEGER,
        },
        images:{
          type: Sequelize.STRING,
        },
        brand:{
          type: Sequelize.STRING,
        },
        colors:{
          type: Sequelize.TEXT,
        },
        sizes:{
          type: Sequelize.INTEGER,
        },
        description:{
          type: Sequelize.STRING,
        },
        stock:{
          type: Sequelize.INTEGER,
        },


        
      });
    } catch (error) {
      
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};

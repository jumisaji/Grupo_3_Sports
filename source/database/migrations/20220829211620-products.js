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
          type: Sequelize.VARCHAR,
        },
        categories: {
          type: Sequelize.INTEGER,
        },
        prices: {
          type: Sequelize.INTEGER,
        },
        images:{
          type: Sequelize.VARCHAR,
        },
        brand:{
          type: Sequelize.VARCHAR,
        },
        colors:{
          type: Sequelize.TEXT,
        },
        sizes:{
          type: Sequelize.INTEGER,
        },
        description:{
          type: Sequelize.VARCHAR,
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

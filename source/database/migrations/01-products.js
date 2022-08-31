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
        category: {
          type: Sequelize.INTEGER,
        },
        price: {
          type: Sequelize.INTEGER,
        },
        imageid:{
          type: Sequelize.STRING,
        },
        brand:{
          type: Sequelize.STRING,
        },
        color:{
          type: Sequelize.TEXT,
        },
        size:{
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

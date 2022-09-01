"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("products", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
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
          primaryKey: true,
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
       


        
      });
    } catch (error) {
      
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};

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
          allowNull:true
        },
        price: {
          type: Sequelize.INTEGER,
        },
        imageid:{
          type: Sequelize.STRING,
          allowNull:true
        },
        brand:{
          type: Sequelize.STRING,
          allowNull:true
        },
        color:{
          type: Sequelize.TEXT,
          allowNull:true
        },
        description:{
          type: Sequelize.TEXT,
        }
       
      });
    } catch (error) {
      
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};

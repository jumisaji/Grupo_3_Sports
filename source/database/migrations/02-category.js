"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("categories", {
        id: {
          allownull: false,
          autoincrement: true,
          primarykey: true,
          type: Sequelize.INTEGER,
        },
        bikeOption:{
          type: Sequelize.STRING
        },
      });
    } catch (error) {
      
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categories");
  },
};

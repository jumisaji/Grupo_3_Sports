"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("brands", {
        id: {
          allownull: false,
          autoincrement: true,
          primarykey: true,
          type: Sequelize.INTEGER,
        },
      brandoption:{
        type: Sequelize.STRING
      }
      });
    } catch (error) {
      console.log();
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("brands");
  },
};

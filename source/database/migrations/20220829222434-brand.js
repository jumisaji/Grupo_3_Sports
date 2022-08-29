"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("brand", {
        id: {
          allownull: false,
          autoincrement: true,
          primarykey: true,
          type: Sequelize.INTEGER,
        },
      brandoption:{
        type: Sequelize.VARCHAR,
      }
      });
    } catch (error) {
      console.log();
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("brand");
  },
};

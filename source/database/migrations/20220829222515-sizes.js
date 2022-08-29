"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("sizes", {
        id: {
          allownull: false,
          autoincrement: true,
          primarykey: true,
          type: Sequelize.INTEGER,
        },
        sizesOption:{
          type: Sequelize.INTEGER,
        }
      });
    } catch (error) {
      console.log();
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sizes");
  },
};


"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("users", {
        id: {
          allownull: false,
          autoincrement: true,
          primarykey: true,
          type: Sequelize.INTEGER,
        },
        name:{
          type: Sequelize.VARCHAR,
        },
        surname:{
          type: Sequelize.VARCHAR,
        },
        email:{
          type: Sequelize.VARCHAR,
        },
        identifications:{
          type: Sequelize.INTEGER,
        },
        phoneNumber:{
          type: Sequelize.INTEGER
        },
        password:{
          type: Sequelize.INTEGER,
        },
        isAdmin:{
          type: Sequelize.INTEGER,
        }


      });
    } catch (error) {
      console.log();
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};

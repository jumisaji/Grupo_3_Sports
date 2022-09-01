
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name:{
          type: Sequelize.STRING,
        },
        surname:{
          type: Sequelize.STRING,
        },
        email:{
          type: Sequelize.STRING,
        },
        identification:{
          type: Sequelize.INTEGER,
        },
        phoneNumber:{
          type: Sequelize.INTEGER
        },
        password:{
          type: Sequelize.TEXT,
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

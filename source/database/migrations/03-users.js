
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
          type: Sequelize.TEXT,
          allowNull:true
        },
        surname:{
          type: Sequelize.TEXT,
          allowNull:true
        },
        email:{
          type: Sequelize.TEXT,
          allowNull:true
        },
        identification:{
          type: Sequelize.TEXT,
          allowNull:true
        },
        phoneNumber:{
          type: Sequelize.TEXT,
          allowNull:true
        },
        password:{
          type: Sequelize.TEXT,
          allowNull:true
        },
        isAdmin:{
          type: Sequelize.BOOLEAN,
          allowNull:true
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

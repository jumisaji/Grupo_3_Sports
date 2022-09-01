'use strict';
const {index} = require("../../models/users.model")
module.exports = {
  async up (queryInterface, Sequelize) {
   let users = [  {
   
    name: "admin",
    surname: "prueba",
    email: "prueba@grupo3.com",
    identification: "45630969",
    phoneNumber: "1162907922",
    password: "$2a$10$6C7Fh/aZrENADKKZrIU4Luj4erjszVBHIiutcBEEwjXkygC2USg0K",
    isAdmin: true
  },
  {
    
    name: "Pepito",
    surname: "Prueba",
    email: "prueba@dh.com",
    identification: "33333333333",
    phoneNumber: "333333333333333",
    password: "$2a$10$c5eJF2T5FMrMx/U7Xdxr8eT/0qB9quU1IcOyCu9fQjcYCJ4CVHEdW",
    isAdmin: false
  }

   ]
     await queryInterface.bulkInsert('users',users, {});
   
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('users', null, {});
     
  }
};

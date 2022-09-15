'use strict';

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('imagesBikes', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        path: {
          type: Sequelize.TEXT
        }
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('imagesBikes');
    
  }
};

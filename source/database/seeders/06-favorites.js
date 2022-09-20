
module.exports = {
  async up (queryInterface, Sequelize) {
    let favs = [
        {
            productId: 1,
            userId:2
        },
        {
            productId: 2,
            userId:2
        },
        {
            productId: 3,
            userId:2
        },
        {
            productId: 4,
            userId:2
        }
    ]
    await queryInterface.bulkInsert('favorites', favs , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorites', null, {});
   
  }
};
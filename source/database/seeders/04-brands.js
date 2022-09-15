module.exports = {
  async up (queryInterface, Sequelize) {
    let brands = [
        {
            id:1,
            brandoption: "GW"
        },
        {
            id:2,
            brandoption: "Pacifica"
        },
        {
            id:3,
            brandoption: "cube bikes"
        },
        {
            id:4,
            brandoption: "Specialized"
        }
    ]
    await queryInterface.bulkInsert('brands', brands , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brands', null, {});
   
  }
};
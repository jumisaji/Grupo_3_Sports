module.exports = {
  async up (queryInterface, Sequelize) {
    let brands = [
        {
            id:1,
            brandoption: "GW"
        },
        {
            id:2,
            brandoption: "Benelli"
        },
        {
            id:3,
            brandoption: "cube bikes"
        },
        {
          id:4,
          brandoption: "Scott"
      },
        {
            id:5,
            brandoption: "Specialized"
        },
        {
          id:6,
          brandoption: "Giant"
      },
      {
        id:7,
        brandoption: "DiamondBack"
    },
    {
      id:8,
      brandoption: "Fuji"
  }
    ]
    await queryInterface.bulkInsert('brands', brands , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brands', null, {});
   
  }
};
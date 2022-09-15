
module.exports = {
  async up (queryInterface, Sequelize) {
    let products = [
        {
          "name": "bici1",
          "id": 1,
          "category": "Ruta",
          "price": 1234,
          "imageid": "ruta-1.png",
          "description": "lorem ipsum",
          "color": "Blanco y negro"
        },
        {
          "name": "bici3",
          "id": 3,
          "category": "Ruta",
          "price": 1234,
          "imageid": "ruta-3.png",
          "description": "hola chicos",
          "color": "Amarillo y gris"
        },
        {
          "name": "bici5",
          "id": 4,
          "category": "Ruta",
          "price": 1234,
          "imageid": "ruta-4.png",
          "description": "",
          "color": "Azul y negro"
        },
        {
          "name": "bici5",
          "id": 5,
          "category": "BMX",
          "price": 1234,
          "imageid": "bmx-1.png",
          "description": "lorem ipsum",
          "color": "Negro"
        },
        {
          "name": "bici6",
          "id": 6,
          "category": "BMX",
          "price": 1234,
          "imageid": "bmx-2.png",
          "description": "lorem ipsum",
          "color": "Negro"
        },
        {
          "name": "bici7",
          "id": 7,
          "category": "BMX",
          "price": 1234,
          "imageid": "bmx-3.png",
          "description": "lorem ipsum",
          "color": "Negro"
        },
        {
          "name": "bici8",
          "id": 8,
          "category": "BMX",
          "price": 1234,
          "imageid": "bmx-4.png",
          "description": "lorem ipsum",
          "color": "Blanco"
        },
        {
          "name": "bici9",
          "id": 9,
          "category": "MTB",
          "price": 1234,
          "imageid": "mtb-1.png",
          "description": "lorem ipsum",
          "color": "Negro y amarillo"
        },
        {
          "name": "bici10",
          "id": 10,
          "category": "MTB",
          "price": 1234,
          "imageid": "mtb-2.png",
          "description": "lorem ipsum",
          "color": "Negro y amarillo"
        },
        {
          "name": "bici11",
          "id": 11,
          "category": "MTB",
          "price": 1234,
          "imageid": "mtb-3.png",
          "description": "lorem ipsum",
          "color": "Amarillo"
        },
        {
          "name": "bici12",
          "id": 12,
          "category": "MTB",
          "price": 1234,
          "imageid": "mtb-4.png",
          "description": "lorem ipsum",
          "color": "Rojo y negro"
        },
        {
          "name": "bici13",
          "id": 13,
          "category": "Urban",
          "price": 1234,
          "imageid": "urbana-1.png",
          "description": "lorem ipsum",
          "color": "Negro"
        },
        {
          "name": "bici14",
          "id": 14,
          "category": "Urban",
          "price": 1234,
          "imageid": "urbana-2.png",
          "description": "lorem ipsum",
          "color": "Negro"
        },
        {
          "name": "bici15",
          "id": 15,
          "category": "Urban",
          "price": 1234,
          "imageid": "urbana-3.png",
          "description": "lorem ipsum",
          "color": "Celeste"
        },
        {
          "name": "bici16",
          "id": 16,
          "category": "Urban",
          "price": 1234,
          "imageid": "urbana-4.png",
          "description": "lorem ipsum",
          "color": "Negro y azul"
        },
        {
          "id": 17,
          "name": "fffff",
          "price": 1233,
          "description": "rrrrrrrrrrrrrrrrrrr",
          "imageid": "image-1661969717051_img.png"
        },
        {
          "id": 18,
          "name": "dghgdhd",
          "price": 234,
          "description": "345654345654",
          "imageid": "image-1661970318186_img.png"
        },
        {
          "id": 19,
          "name": "dghggggg",
          "price": 2345,
          "description": "2345654321",
          "imageid": "image-1661970639273_img.png"
        },
        {
          "id": 20,
          "name": "ergedfgfd",
          "price": 12345,
          "description": "3456yuyt543",
          "imageid": "image-1661970795452_img.png"
        }
      ]
    let colors = products.map((product,index) =>{
      return Object({id: index + 1,colorOption: product.color}) 
    }).filter((element, index,array) => {
        return element.colorOption != "" || element.colorOption != undefined || element.colorOption != null
      })
      .filter((element, index,array) => {
      return array.indexOf(element) === index;
    })
    await queryInterface.bulkInsert('colors', colors , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colors', null, {});
   
  }
};
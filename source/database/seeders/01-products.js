module.exports = {
  async up (queryInterface, Sequelize) {

      let products = [
         {
           "name": "Bicicleta Ruta Top Mega Harrier 16v Claris Shadow + Phanter",
           "id": 1,
           "category": "Ruta",
           "price": 169309,
           "imageid": "ruta-1.png",
           "description": "Sistema de Cambios: Shimano Claris 16 velocidades - Desviador: Shimano Claris - Manija de Cambios: Shimano Claris - Engranaje: Shimano Claris - Ultra Liviana",
           "color": "Blanco y negro"
         },
         {
          "name": "Bicicleta Ruta Sunpeed Invincible Carbono 2x11v - Muvin",
          "id": 2,
          "category": "Ruta",
          "price": 901.956 ,
          "imageid": "ruta-2.png",
          "description": "Nuestro modelo tope de linea en ruta. Se INVENCIBLE con tu Sunpeed. Con su cuadro y horquillas de carbono super rígido y liviano, vas a poder rendir al máximo. Equipada con transmisión Shimano 105 2x11, frenos semi hidráulicos ANV y ruedas de aluminio perfil 30mm.",
          "color": "Negro"
        },
         {
           "name": "Bicicleta Ruta Sunpeed Mars Aluminio/carbono 2x8v - Muvin",
           "id": 3,
           "category": "Ruta",
           "price": 360047,
           "imageid": "ruta-3.png",
           "description": "Sunpeed Mars es nuestra bicicleta de ruta más popular ya que presenta grandes prestaciones siendo uno de los modelos más básicos. Su cuadro de aluminio liviano y su horquilla de carbono la convierten en una bicicleta sumamente liviana, cómoda y ágil.",
           "color": "Amarillo y gris"
         },
         {
           "name": "Bicicleta Ruta Polygon Strattos S7 105 22v Carbono Disco",
           "id": 4,
           "category": "Ruta",
           "price": 465900,
           "imageid": "ruta-4.png",
           "description": "La nueva línea de bicicletas para ruta de Polygon esta fabricada con cuadro y horquilla de carbono UCI, además de tubos diagonales un 16 % más rígidos; Strattos, está diseñado para acompañarte en cada viaje.",
           "color": "Azul y negro"
         },
         {
           "name": "Bicicleta Bmx Wethepeople Justice ¡black! Profesional Cromo",
           "id": 5,
           "category": "BMX",
           "price": 196000,
           "imageid": "bmx-1.png",
           "description": "Se trata de un modelo de gama alta, diseñado y pensado para riders exigentes dado que es equipada con componentes de altisima calidad y se utilizan para su fabricación materiales de primera como el Cromo 4130. Ya es un material consagrado para la fabricación de cuadros gracias a su liviandad y resistencia extrema.",
           "color": "Negro"
         },
         {
           "name": "Bicicleta Bmx Profesional Sunday Primer Freestyle ¡verde!",
           "id": 6,
           "category": "BMX",
           "price": 274499,
           "imageid": "bmx-2.png",
           "description": "Tremenda BMX llega a Argentina gracias a su marca Sunday. Una marca de gran calidad que ofrece Bicicletas con componentes de Primera como su Stem Sunday o sus Cubiertas Odyssey. Una excelente opción para empezar a practicar este deporte con una BMX de calidad que permita desarrollarse y aprender muy rápido, gracias a ser liviana y resistente.",
           "color": "Negro"
         },
         {
           "name": "Bicicleta Bmx Fit Str ¡cromo! Street Profesional Negra",
           "id": 7,
           "category": "BMX",
           "price": 259799,
           "imageid": "bmx-3.png",
           "description": "Bicicleta profesional importada, de una de las mejores marcas del mundo. Se trata de la Fit STR. Una BMX especializada para la práctica de BMX de alto nivel tanto en calle como en parques con geometria y configuración que se destaca en Street sobre todo.",
           "color": "Negro"
         },
         {
           "name": "Bicicleta Bmx Profesional Sunday Primer Freestyle ¡naranja!",
           "id": 8,
           "category": "BMX",
           "price": 274499,
           "imageid": "bmx-4.png",
           "description": "Tremenda BMX llega a Argentina gracias a su marca Sunday. Una marca de gran calidad que ofrece Bicicletas con componentes de Primera como su Stem Sunday o sus Cubiertas Odyssey. Una excelente opción para empezar a practicar este deporte con una BMX de calidad que permita desarrollarse y aprender muy rápido, gracias a ser liviana y resistente.",
           "color": "Blanco"
         },
         {
           "name": "Mountain bike SLP 5 pro R29 18",
           "id": 9,
           "category": "MTB",
           "price": 82360,
           "imageid": "mtb-1.png",
           "description": "SLP fabrica alrededor de 100 modelos de bicicletas en una de las plantas industriales más grande de Argentina. Su visión es llegar a todos los rincones, para atender las necesidades de cada cliente. Además, sus productos se caracterizan por estar a la vanguardia en innovación y rendimiento, y buscan generar un impacto positivo en el ambiente.",
           "color": "Negro y amarillo"
         },
         {
           "name": "Mountain bike Battle 210 R29 18",
           "id": 10,
           "category": "MTB",
           "price": 66499,
           "imageid": "mtb-2.png",
           "description": "La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades",
           "color": "Negro y amarillo"
         },
         {
           "name":"Mountain bike Olmo Safari 240 14",
           "id": 11,
           "category": "MTB",
           "price": 76968,
           "imageid": "mtb-3.png",
           "description": "Las bicicletas Olmo se destacan por sus cuadros de aluminio hidroformado y de frente integrado. Son productos de carrera de alta gama, pensados para ciclistas con ganas de superarse y para todas las personas que disfrutan de un andar impecable.",
           "color": "Amarillo"
         },
         {
           "name": "Bicicleta Mountain Bike Battle R29 21v ",
           "id": 12,
           "category": "MTB",
           "price": 55999,
           "imageid": "mtb-4.png",
           "description": "Gracias a sus frenos de disco mecánico podés detener la bicicleta con total precisión. Se caracteriza por su durabilidad, ya que su funcionamiento no se ve afectado por cuestiones como la corrosión, las condiciones climáticas o del suelo",
           "color": "Rojo y negro"
         },
         {
           "name": "Bicicleta urbana femenina Raleigh Classic Lady R28 3v",
           "id": 13,
           "category": "Urban",
           "price": 79923,
           "imageid": "urbana-1.png",
           "description": "Raleigh fabrica productos cumpliendo con los más altos estándares de calidad. Tanto los aficionados al ciclismo como quienes lo practican como deporte y buscan mejorar su salud, encuentran en las bicis Raleigh un producto confiable que cumple con todas sus necesidades.",
           "color": "Negro"
         },
         {
           "name": "Bicicleta urbana Aurora Paseo Mondo",
           "id": 14,
           "category": "Urban",
           "price": 80672,
           "imageid": "urbana-2.png",
           "description": "La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades.",
           "color": "Negro"
         },
         {
           "name": "Bicicleta urbana femenina Raleigh Classic Lady",
           "id": 15,
           "category": "Urban",
           "price":79923 ,
           "imageid": "urbana-3.png",
           "description": "Raleigh fabrica productos cumpliendo con los más altos estándares de calidad. Tanto los aficionados al ciclismo como quienes lo practican como deporte y buscan mejorar su salud, encuentran en las bicis Raleigh un producto confiable que cumple con todas sus necesidades.",
           "color": "Celeste"
         },
         {
           "name": "Bicicleta Vintage Olmo Amelie Acero 6 V Paseo Dama Urbana",
           "id": 16,
           "category": "Urban",
           "price": 62545,
           "imageid": "urbana-4.png",
           "description": "Somos ESTRELLA BIKE STORE, una tienda de bicicletas con un enfoque diferente. Vamos a ayudarte a encontrar la bicicleta ideal para vos.Contamos con asesoramiento personalizado, agente oficial de las mejores marcas y locales a la calle con servicio técnico.",
           "color": "Negro y azul"
         },
        
       ]

     await queryInterface.bulkInsert('products',products,  {});
   
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('products', null, {});
     
  }
};

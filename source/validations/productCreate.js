const { body } = require('express-validator');

const products = [
    body('name').notEmpty().withMessage('Debe completar este campo').bail().
    isLength({ min : 5 }).withMessage('El nombre tiene que completarse con un minimo de 5 caracteres').bail(),

    body('price').notEmpty().withMessage('Debe completar este campo').bail(),
    
    body('image').custom(async({req}) => {
          let archivos = req.files
          if(!archivos || archivos.length == 0){
              throw new Error('No se pudo subir la imagen')
          }
  
          let extensiones = ['.svg','.png','.jpg','.jpeg']
          let image = archivos[0]
          let extension = extname(image.filename)
  
          if(!extensiones.includes(extension)){
               throw new Error('La imagen es permitida solo con las extensiones .svg, .png, .jpg y .jpeg')
              }
  
          return true
        }),

    body('description').notEmpty().withMessage('Debe completar este campo').bail().
    isLength({ min : 20 }).withMessage('La descripción tiene que completarse con un minimo de 20 caracteres').bail(),

]

module.exports = products;
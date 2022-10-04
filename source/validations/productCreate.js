const { body } = require('express-validator');
const {extname,resolve} = require('path')
const {unlinkSync} = require('fs')

module.exports = [
    body('name').notEmpty().withMessage('el campo del nombre debe estar completo').bail().
    isLength({ min : 5 }).withMessage('El nombre del producto tiene que tener minimo de 5 caracteres').bail(),

    body('price').notEmpty().withMessage('el campo del precio debe estar completo').bail(),

    

    body('image').custom((value,{req}) =>{
             let archivos = req.files
             if(!archivos || archivos.length == 0){
                 throw new Error('Debe subir una imagen')
             }
             let extensiones = ['.svg','.png','.jpg','.jpeg']
             let image = archivos[0]
             let extension = extname(image.filename)
    
             if(!extensiones.includes(extension)){
                 unlinkSync(resolve(__dirname, '../../uploads','products',image.filename))
                 throw new Error('La imagen no tiene una extension valida ')
             }
    
             if(image.size > 2097152){
                 unlinkSync(resolve(__dirname, '../../uploads','products',image.filename))
                 throw new Error('La imagen supera el peso de 2MB')
             }
    
             return true
         }),
    body('description').notEmpty().withMessage('el campo de la descripcion debe estar completo').bail().
    isLength({ min : 20 }).withMessage('La descripción del producto tiene que tener mínimo de 20 caracteres').bail(),

]
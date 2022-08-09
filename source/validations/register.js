const {body} = require('express-validator');
const {extname, resolve} = require('path');
const {unlinkSync} = require('fs');
const {index} = require('../models/users.model')

const register = [
    body('name').notEmpty().withMessage('Debe completar este campo').bail().isLength({ min : 2 }).
    withMessage('El nombre tiene que completarse con un minimo de 2 caracteres').bail(),

    body('surname').notEmpty().withMessage('Debe completar este campo').bail().isLength({ min : 2 }).
    withMessage('El nombre tiene que completarse con un minimo de 2 caracteres').bail(),

    body('email').notEmpty().withMessage('Debe completar este campo').bail().isEmail().
    withMessage('Debe poner un email valido').bail().custom(value => {
        let users = index()
        users = users.map(u => u.email)
        if(users.includes(value)){
            throw new Error('El email ingresado ya esta registrado')
        }
        return true
    }),

    body('identification').notEmpty().withMessage('Debe completar este campo').bail().
    isLength({ min : 4 }).withMessage('El documento tiene que contener minimo 4 caracteres').bail(),

    body('phoneNumber').notEmpty().withMessage('Debe completar este campo').bail(),

    body('usersProfilePhoto').custom((value, {req}) => {
        let archivos = req.files
        if(!archivos || archivos.length == 0){
            throw new Error('No se pudo subir la imagen')
        }

        let extensiones = ['.svg','.png','.jpg','.jpeg']
        let usersProfilePhoto = archivos[0]
        let extension = extname(usersProfilePhoto.filename)

        if(!extensiones.includes(extension)){
            unlinkSync(resolve(__dirname, '../../public/images/','users',usersProfilePhoto.filename))
            throw new Error('La imagen es permitida solo con las extensiones .svg, .png, .jpg y .jpeg')
        }

        if(usersProfilePhoto.size > 2097152){
            unlinkSync(resolve(__dirname, '../../public/images/','users',usersProfilePhoto.filename))
            throw new Error('La imagen no debe superar los 2MB de peso')
        }

        return true
    }),

    body('password').notEmpty().withMessage('Debe completar este campo').bail().
    isLength({ min : 5 }).bail(),
]

module.exports = register;  
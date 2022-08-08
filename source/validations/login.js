const { body } = require('express-validator');
const {index} = require('../models/users.model');
const {compareSync} = require('bcryptjs');

const login =[
    body('email').notEmpty().withMessage('Debe completar este campo').bail().isEmail().
    withMessage('Debe poner un email valido').bail().custom(value => {
        let users = index()
        users = users.map(u => u.email)
        if(!users.includes(value)){
            throw new Error('El email no está registrado, ve al apartado de "Nuevo registro" y registra tus datos.');
        }
        return true
    }),
    body('password').notEmpty().withMessage('Debe completar este campo').bail().
    isLength({ min : 5 }).bail().custom((value , {req}) => {
        let {email} = req.body;
        let users = index();
        let user = users.find(u => u.email === email);

        if(!user){
            throw new Error('No se pudo encontrar al usuario, asegúrate que no tenga errores de ortografía')
        }

        if(!compareSync(value,user.password)){
            throw new Error("La contraseña no coincide con el email ingresado")
          }
        
          return true

    })
]

module.exports = login;
const { body } = require('express-validator');
const { User } = require('../database/models/index');
const {compareSync} = require('bcryptjs');

const login =[
    body('email').notEmpty().withMessage('el campo de email').bail().isEmail().
    withMessage('Debe poner un email valido').bail().custom(async(value) => {
        let users=await User.findAll();
        users = users.map(u => u.email)
        if(!users.includes(value)){
            throw new Error('El email no está registrado, ve al apartado de "Nuevo registro" y registra tus datos.');
        }
        return true
    }),
    body('password').notEmpty().withMessage('Debe completar este campo').bail().
    isLength({ min : 5 }).bail().custom(async(value , {req}) => {
        let {email} = req.body;
        let users=await User.findAll();
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
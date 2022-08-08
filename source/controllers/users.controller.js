const {validationResult} = require('express-validator')
const {index, create, write} = require('../models/users.model');

const userController = {
  register: (req,res) => {
    return res.render('users/register', {
      styles: ['styles_register', 'animations_register', 'media_queries_forms']
  })
  },

  process: function(req, res){
    let validaciones = validationResult(req)
    let {errors} = validaciones
    if(errors && errors.length > 0){
      return res.render('users/register',{
        styles:['styles_register', 'animations_register', 'media_queries_forms'],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    req.body.image = req.files[0].filename;
    let newUser = create(req.body)
    let users = index();
    users.push(newUser)
    write(users)
    return res.redirect('/users/login?msg="El registro fue exitoso"')
  },

  login: (req,res) => {
    return res.render('users/login', {
      styles: ['styles_login', 'animations_login', 'media_queries_forms']
  })
  },
};

module.exports = userController;
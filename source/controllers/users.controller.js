const { hashSync } = require('bcryptjs');
const {validationResult} = require('express-validator')
const {User} = require('../database/models/index');

const userController = {
  register: async (req,res) => {
    return res.render('users/register', {
      styles: ['styles_register', 'animations_register', 'media_queries_forms']
  })
  },

  process: async (req, res)=>{
    let validaciones = validationResult(req)
    let {errors} = validaciones
    if(errors && errors.length > 0){
      return res.render('users/register',{
        styles:['styles_register', 'animations_register', 'media_queries_forms'],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    req.body.password=hashSync(req.body.password,10);//hasheamos la password del user
    req.body.isadmin=String(req.body.email).toLocaleLowerCase().includes('@grupo3');//verifica si es admin y con toLocaleLowerCase las pasamos todas a minúscula

await User.create(req.body);//crea usuario registrando en base de datos
    return res.redirect('/users/login?msg="El registro fue exitoso')
  },

  login: async (req,res) => {
    return res.render('users/login', {
      styles: ['styles_register','styles_login', 'animations_login', 'media_queries_forms']
  })
  },
  access: async(req,res)=>{
    let validaciones = validationResult(req)
    let {errors} = validaciones
    if(errors && errors.length > 0){
      return res.render('users/login',{
        styles:['styles_login', 'animations_login', 'media_queries_forms'],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

   let users=await User.findAll({//sq
include:{
  all:true
}
   });
    let user = users.find(u => u.email === req.body.email);
    req.session.User = user; //acá user esta obteniendo los datos de ese usuario que se logueó o que está ingresando;
    
    req.body.isadmin=String(req.body.email).toLocaleLowerCase().includes('@grupo3')
      

    // if(req.body.recordame){
    //   res.cookie("recordame", req.body.email, { maxAge: 172800000})
    // }

    return res.redirect('/')
  },
  logout: function (req,res) {
    delete req.session.user
    return res.redirect('/')
  }
};

module.exports = userController;
const isLogged = (req,res,next) => {
    if(req.session && !req.session.user){
      return res.redirect('/users/login')
    }
    return next()
  }
  module.exports = isLogged


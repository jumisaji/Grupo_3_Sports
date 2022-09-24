const isLogged = (req,res,next) => {
    if(req.session && !req.session.User){
      return res.redirect('/users/login')
    }
    return next()
  }
  module.exports = isLogged


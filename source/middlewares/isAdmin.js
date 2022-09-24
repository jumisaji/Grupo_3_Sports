const isadmin = (req,res,next) => {
    if(!req.session.User.isadmin){
      return res.redirect('/')
    }
    return next()
  }
  module.exports = isadmin
const { User } = require('../database/models/index');
module.exports = async(req,res,next) => {

    let user = null;

    if(req.cookies && req.cookies.username){
        let users= await User.findAll();
        user = users.find(u => u.username === req.cookies.username)
        req.session.user = user
    }

    if(req.session && req.session.user){
        user = req.session.user
    }
    
    res.locals.user = user

    return next()
}
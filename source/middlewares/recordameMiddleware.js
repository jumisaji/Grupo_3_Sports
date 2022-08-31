const {index} = require('../models/users.model');
module.exports = (req,res,next) => {

    let user = null;

    if(req.cookies && req.cookies.username){
        let users = index();
        user = users.find(u => u.username === req.cookies.username)
        req.session.user = user
    }

    if(req.session && req.session.user){
        user = req.session.user
    }
    
    res.locals.user = user

    return next()
}
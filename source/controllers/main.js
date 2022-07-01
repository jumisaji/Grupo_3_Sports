<<<<<<< HEAD
const {resolve} = require('path')
module.exports = {
    
home: function(req,res){ 
    let file = resolve(__dirname, '../views/home.html') 
    res.sendFile(file)
}
=======
const data = [
    {

    }
];
const controller = {
    home: (req,res) => res.render('home', data),
>>>>>>> a299453f8953a120659007e102884167c901c7d6
}
module.exports = controller;


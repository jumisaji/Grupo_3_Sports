const data = [
    {

    }
];
const controller = {
    home: (req,res) => res.render('home', data),
    head: (req, res)=> res.render('head',),
    header: (req,res)=> res.render('header'),
    bodywhapp: (req,res)=> res.render('bodywhapp'),
    footer:(req,res)=>res.render('footer')
}
module.exports = controller;


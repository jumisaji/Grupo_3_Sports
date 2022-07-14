const data = [
    {

    }
];
const controller = {
    home: (req,res) => res.render('home', {
     styles: ['styles_main_home', 'animaciones_main_home', 'media_queries_main_home']   
    }),
};
module.exports = controller;


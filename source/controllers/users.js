const data = [
    {

    }
];
const controller = {
    login: (req,res) => res.render('login', {
        styles: ['styles_login', 'animaciones_login', 'media_queries_formularios']
    }),

    register: (req,res) => res.render('register', {
        styles: ['styles_register', 'animaciones_register', 'media_queries_formularios']
    }),

    carrito: (req,res) => res.render('carrito', {
        styles: ['styles_carrito', 'animaciones_carrito', 'media_queries_carrito']
    }),
};
module.exports = controller;
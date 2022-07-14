const data = [
    {

    }
];
const controller = {
    login: (req,res) => res.render('login', {
        styles: ['styles_login', 'animations_login', 'media_queries_forms']
    }),

    register: (req,res) => res.render('register', {
        styles: ['styles_register', 'animations_register', 'media_queries_forms']
    }),

    carrito: (req,res) => res.render('cart', {
        styles: ['styles_cart', 'animations_cart', 'media_queries_cart']
    }),
};
module.exports = controller;
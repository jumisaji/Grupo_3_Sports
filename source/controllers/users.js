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

    creacion: (req,res) => res.render('create', {
        styles: ['styles_create', 'animations_create', "media_queries_create"]

}),

edicion: (req,res) => res.render('edit', {
    styles: ['styles_edit', 'animations_edit', "media_queries_edit"]

})
}

module.exports = controller;
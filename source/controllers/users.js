const data = [
    {

    }
];
const controller = {
    login: (req,res) => res.render('login', data),
    register: (req,res) => res.render('register', data),
    carrito: (req,res) => res.render('carrito', data),
}
module.exports = controller
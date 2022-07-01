const data = [
    {

    }
];
const controller = {
    bmx: (req,res) => res.render('bmx', data),
    mtb: (req,res) => res.render('mtb', data),
    ruta: (req,res) => res.render('ruta', data),
    urban: (req,res) => res.render('urban', data),
    detalle: (req,res) => res.render('detalle', data),
}
module.exports = controller
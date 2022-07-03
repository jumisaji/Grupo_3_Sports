const data = [
    {

    }
];
const controller = {
    bmx: (req,res) => res.render('bmx', {
        css: ['styles_main_bikes', 'animaciones_main_bikes', 'media_queries_main_bikes']
    }),
    

    mtb: (req,res) => res.render('mtb',{
        styles: ['styles_main_bikes', 'animaciones_main_bikes', 'media_queries_main_bikes']
    }),

    ruta: (req,res) => res.render('ruta', {
        styles: ['styles_main_bikes', 'animaciones_main_bikes', 'media_queries_main_bikes']
    }),

    urban: (req,res) => res.render('urban',{
        styles: ['styles_main_bikes', 'animaciones_main_bikes', 'media_queries_main_bikes']
    }),

    detalle: (req,res) => res.render('productoDetalle', {
        styles: ['styles_productoDetalle', 'animaciones_productoDetalle', 'media_queries_productoDetalle']
    }),

    creacion: (req,res) => res.render('creacion', data),

    edicion: (req,res) => res.render('edicion', data)

};
module.exports = controller;
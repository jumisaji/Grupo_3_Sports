const data = [
    {

    }
];
const controller = {
    bmx: (req,res) => res.render('bmx', {
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),
    

    mtb: (req,res) => res.render('mtb',{
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    ruta: (req,res) => res.render('route', {
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    urban: (req,res) => res.render('urban',{
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    detalle: (req,res) => res.render('productDetail', {
        styles: ['styles_productDetail', 'animations_detailproduct', 'media_queries_productDetail']
    }),

    creacion: (req,res) => res.render('create', data),

    edicion: (req,res) => res.render('edit', data)

};
module.exports = controller;
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

    ruta: (req,res) => res.render('ruta', {
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    urban: (req,res) => res.render('urban',{
        styles: ['styles_main_bikes', 'animations_main_bikes', 'media_queries_main_bikes']
    }),

    detalle: (req,res) => res.render('productDetail', {
        styles: ['styles_productDetail', 'animations_productDetail', 'media_queries_productDetail']
    }),

    

};
module.exports = controller;

module.exports = {
    home: (req,res) =>{
        return res.render('home',{
        title: 'Home',
        styles: ['styles_main_home', 'animations_main_home', 'media_queries_main_home']   
        });
    },
    
};



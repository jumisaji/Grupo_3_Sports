const {resolve} = require('path')
module.exports = {
    
home: function(req,res){ 
    let file = resolve(__dirname, '../views/home.html') 
    res.sendFile(file)
}
}


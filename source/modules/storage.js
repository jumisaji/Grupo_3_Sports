const {diskStorage} = require('multer');
const {extname, resolve} = require('path')


const storage = directory => diskStorage({
    destination: (req, file, callback) => {
      let path = resolve(__dirname, '../../uploads/', directory)
      return callback(null,path);
    },
    filename: (req, file, callback) => {
      let fileName = `${file.fieldname}-${Date.now()}_img${extname(file.originalname)}`;
      return callback(null, fileName);
    }
  });

module.exports = storage;

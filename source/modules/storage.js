const {extname, resolve} = require('path')
const {diskStorage} = require('multer');

const storage = directory => diskStorage({
    destination: (req, file, callback) => {
      let path = resolve(__dirname, '../../public/images/', directory)
      return callback(null,path);
    },
    filename: (req, file, callback) => {
      let fileName = `${file.fieldname}-${Date.now()}_img${extname(file.originalname)}`;
      return callback(null, fileName);
    }
  });

module.exports = storage;
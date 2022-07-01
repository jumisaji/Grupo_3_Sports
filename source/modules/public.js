const {resolve} = require('path');
const public = resolve(__dirname, '../public');
module.exports = express.static(public);
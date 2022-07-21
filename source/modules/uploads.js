const { static } = require ('express');
const { resolve } = require ('path');
const public = resolve (__dirname, "../../uploads");
module.exports = static(public);
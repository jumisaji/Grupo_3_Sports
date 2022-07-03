const {resolve} = require('path');
const express = require('express');

const public = resolve(__dirname, '../../public');
module.exports = express.static(public);
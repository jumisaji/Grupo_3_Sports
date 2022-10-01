const {Router} = require('express');
const router = Router();
const {all,one} = require('../../controllers/apis/productsApi.controller')

router.get('/', all)

router.get('/:id',one)

module.exports = router
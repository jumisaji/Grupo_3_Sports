const {Router} = require('express');
const router = Router();
const {all, one, process} = require('../../controllers/apis/usersApi.controller');

router.get('/', all);

router.get('/:id', one);

//router.post('/', process);

module.exports = router
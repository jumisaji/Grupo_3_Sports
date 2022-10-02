const {Router} = require('express');
const router = Router();
const {all} = require('../../controllers/apis/usersApi.controller');

router.get('/', all);

module.exports = router
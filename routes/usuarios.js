let express = require('express');
const userController = require('./users_controller.js');

let router = express.Router();

router.get('/registrar', userController.registrar);

router.get('/ingresar', userController.ingresar);



module.exports = router;


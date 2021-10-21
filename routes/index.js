const express = require('express');

const indexController = require('./index_controller.js');

let router = express.Router();

router.get('/', indexController.index);


module.exports = router;

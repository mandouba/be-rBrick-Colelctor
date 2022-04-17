var express = require('express');
var router = express.Router();

const foodsCtrl = require('../controllers/foods')

/* GET users listing. */
router.get('/', foodsCtrl.index)
router.post('/', foodsCtrl.create) //creating a new post

module.exports = router;

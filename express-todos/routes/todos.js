var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

// reqire the controller that exports to-do CRUD functions 
// .. meansup a directory 
const todosCtrl = require('../controllers/todos');

// get user listing
// all actual paths start with "/todos"

router.get('/', todosCtrl.index) // object w index function/method blah1.blah  left blah1 us an obj
router.get('/new', todosCtrl.new)
router.get('/:id', todosCtrl.show)
router.post('/', todosCtrl.create) // not a get request so it can go after id
router.delete('/:id', todosCtrl.delete)
module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing */ 
router.get('/', function(req, res, next){
res.send('respond with a resource');

});

module.exports = router;
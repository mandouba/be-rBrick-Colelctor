var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const username = rew.query.username
  console.log(`username: ${username}`)
  res.send('index');
});

module.exports = router;

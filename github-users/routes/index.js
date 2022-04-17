var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const token = process.env.GITHUB_TOKEN;
const rootURL = 'https://api.github.com/';


/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.query.username
  // If this is not a "search", just render the index view
  if (!username) return res.render('index', {userData: null});
  // For now, we'll pass the token in a querystring
  fetch(`${rootURL}users/${username}?access_token=${token}`)
    .then(res => res.json())
    .then(userData => {
      res.render('index', { userData });
    });
  });

module.exports = router;

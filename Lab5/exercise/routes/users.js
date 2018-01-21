var express = require('express');
var fetch = require('node-fetch')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  const obj = fetch('http://jsonplaceholder.typicode.com/users/')
  .then(function(res) {
      return res.json();
  }).then(function(body) {
      res.render('users',{ users: body })
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Cloud computing welcome all users');
});

module.exports = router;

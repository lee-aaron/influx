var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("get request");
});

router.post('/upscale', function(req, res, next) {
    res.send('upscale');
});

module.exports = router;
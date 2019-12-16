var express = require('express');
var multer = require('multer');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var upload = multer({ dest: 'uploads/'})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("get request");
});

router.post('/', upload.single('file'), function(req, res, next) {
  console.log(req.file);
  fs.unlinkSync(path.join(__dirname, "..", req.file.path), err => {
    console.log(err);
  });
  res.send('upscale');
});

module.exports = router;
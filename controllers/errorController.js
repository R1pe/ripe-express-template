var express = require('express');
var router = express.Router();

router.index = function (req, res) {
  res.send('404!');
}

module.exports = router;

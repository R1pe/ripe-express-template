var express = require('express');
var project_router = express.Router();

project_router.index = function (req, res) {
  res.send('Projects home page');
}

project_router.now = function (req, res) {
  res.send('On going projects page');
}

project_router.finished = function (req, res) {
  res.send('Finished projects page');
}

project_router.error = function (req, res) {
  res.redirect('/error');
}

module.exports = project_router;

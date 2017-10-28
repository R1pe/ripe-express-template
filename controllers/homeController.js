var express = require('express');
var home_router = express.Router();

home_router.index = function (req, res) {
  res.send('Homepage of my site');
}

home_router.about = function(req, res) {
  res.send('About this site');
}

home_router.projects = function(req, res) {
  res.redirect('/project');
}

home_router.error = function(req, res) {
  res.redirect('/error');
}

module.exports = home_router;

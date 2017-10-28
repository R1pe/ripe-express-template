const express = require("express");
var app = express();

var index = require('./routes/index');
var home = require('./routes/home');
var project = require('./routes/project');
var error = require('./routes/error');

app.use('/', index);
app.use('/home', home);  // Add catalog routes to middleware chain.
app.use('/project', project);
app.use('*', error); // Everything else causes a 404!

module.exports = app;

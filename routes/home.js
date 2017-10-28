
var express = require('express');
var home_router = express.Router();

var home_controller = require("../controllers/homeController.js");

// Home page controller routes
home_router.get("/", home_controller.index);
home_router.get("/about", home_controller.about);
home_router.get('/project', home_controller.projects);
home_router.get('/error', home_controller.error);

module.exports = home_router;

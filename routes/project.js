
var express = require('express');
var project_router = express.Router();

var project_controller = require("../controllers/projectController.js");

// Project views
project_router.get("/", project_controller.index);
project_router.get("/now", project_controller.now);
project_router.get("/finished", project_controller.finished);
project_router.get('/error', project_controller.error);

module.exports = project_router;


var express = require('express');
var error_router = express.Router();

var error_controller = require("../controllers/errorController.js");

error_router.get("/", error_controller.index);

module.exports = error_router;

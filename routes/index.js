/*
This is where the all routing starts

This file contains the redirecting logic and the expression of the main home page
*/

var express = require('express');
var router = express.Router();

// Tämä vain redirectaa tiettyyn tiedostoon
router.get('/', function (req, res) {
  res.redirect('/home');
})


module.exports = router;

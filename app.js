var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
  }));

var UserController = require('./user/UserController');
app.use('/users', UserController);
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;
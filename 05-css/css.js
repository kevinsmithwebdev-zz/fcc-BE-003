// Require what we need

var express = require("express");
var stylus = require('stylus')

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

var path = process.argv[3];

// build server
// Build the app

var app = express();

// Add some middleware

app.use(stylus.middleware(path));
app.use(express.static(path));

// call server ...

app.listen(port, host);

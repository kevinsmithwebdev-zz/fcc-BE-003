// Require what we need
var path = require('path');
var express = require("express");

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

var file = process.argv[3];

// build server
// Build the app

var app = express();

// Add some middleware

app.use(express.static(file||path.join(__dirname, 'public')));

// call server ...

app.listen(port, host);

// Require what we need
var express = require("express");

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

// build server
// Build the app

var app = express();

// Add some middleware

app.get('/home', function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

// call server ...

app.listen(port, host);

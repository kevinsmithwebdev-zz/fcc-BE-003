// Require what we need
var express = require("express");
var http = require("http");

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

// build server
// Build the app
var app = express();

// Add some middleware

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello Roxana!\n");
});

// call server ...

app.listen(port, host);

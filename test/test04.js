// Require what we need
var express = require("express");
var http = require("http");

var port = process.env.PORT;
var host = process.env.IP;


// Build the app

var app = express();


// Logging middleware
app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

// Send "hello world"
app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world!\n");
});

// call server ...

app.listen(port, host, function() { 
    console.log("Server running at port: " + port + " and IP: " + host + " ..."); 
});
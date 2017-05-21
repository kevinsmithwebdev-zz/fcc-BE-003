// Require what we need
var http = require("http");

var port = process.env.PORT;
var host = process.env.IP;

// build server

var app = http.createServer(function(req, res) {
  // Homepage
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the homepage!");
  }

  // About page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the about page!");
  }

  // 404'd!
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error! File not found.");
  }
});

// call server ...

app.listen(port, host, function() { 
    console.log("Server running at port: " + port + " and IP: " + host + " ..."); 
});

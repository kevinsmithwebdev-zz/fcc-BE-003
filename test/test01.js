// Require what we need
var http = require("http");

var port = process.env.PORT;
var host = process.env.IP;

// build server


var app = http.createServer(function(request, response) {
  // Build the answer
  var answer = "";
  answer += "Request URL: " + request.url + "\n";
  answer += "Request type: " + request.method + "\n";
  answer += "Request headers: " + JSON.stringify(request.headers) + "\n";

  // Send answer
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(answer);
});

app.listen(port, host);
console.log("Server running at port: " + port + " and IP: " + host + " ...");
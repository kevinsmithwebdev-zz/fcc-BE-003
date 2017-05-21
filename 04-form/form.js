// Require what we need

var express = require("express");
var bodyparser = require('body-parser')

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

var path = process.argv[3];

// build server
// Build the app

var app = express();

// Add some middleware

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});

// call server ...

app.listen(port, host);

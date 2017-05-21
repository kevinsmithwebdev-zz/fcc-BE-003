// Require what we need
var path = require('path');
var express = require("express");

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

var path = process.argv[3];

// build server
// Build the app

var app = express();

// Add some middleware
app.set('views', path);
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});
});

// call server ...

app.listen(port, host);

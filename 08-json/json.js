
// Require what we need

var fs = require('fs');
var express = require("express");

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

var file = process.argv[3];

// Build the app

var app = express();

// Add some middleware

app.get('/books', function(req, res) {
    fs.readFile(file, function(e, data) {
        if (e) return res.sendStatus(500);
        try {
            res.json(JSON.parse(data));
        } catch (e) {
            res.sendStatus(500);
        }
    });
});

// call server ...

app.listen(port, host);

var express = require('express');

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

var app = express();


app.get('/search', function(req, res) {
    var query = req.query;
    res.send(query);
});

app.listen(port, host);
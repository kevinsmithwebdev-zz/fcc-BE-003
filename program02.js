var express = require('express');
var path = require('path');

var port = process.argv[2];
var file = process.argv[3];

var app = express();

app.use(express.static(file));

app.listen(port);
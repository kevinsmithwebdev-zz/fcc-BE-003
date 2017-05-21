var express = require('express');
var crypto = require('crypto');

var port = process.argv[2] || process.env.PORT;
var host = process.env.IP;

var app = express();

app.put('/message/:id', function(req, res){
    var id = req.params.id;
    var resStr = crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');
    res.send(resStr);
});

app.listen(port, host);
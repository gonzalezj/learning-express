// expressworks tutorial
// example #6

// param_pam_pam.js

// declaration section
var express = require('express');
var crypto = require('crypto');
var app = express();

// PUT request
app.put('/message/:id', function(req, res){
	var id = req.params.id;
	var token = crypto
		.createHash('sha1')
		.update(new Date()
		.toDateString() + id)
		.digest('hex');

	res.send(token);
});

// the second argument will be the port number
app.listen(process.argv[2]);
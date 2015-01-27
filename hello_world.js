// expressworks tutorial 
// example #1

// hello_world.js

// declaration section
var express = require('express');
var app = express();

// route
app.get('/home', function(req, res) {
	res.end('Hello World!');
});

// the second argument will the port number
app.listen(process.argv[2]);


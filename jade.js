// expressworks tutorial
// example #2

// jade.js

// declaration section
var path = require('path');
var express = require('express');
var app = express();

// pick the template engine
app.set('view engine', 'jade');

// the 3rd argument will be the path to the template folder
// you could use "path.join(__dirname, 'templates')" instead of
// process.argv[3]
app.set('views', process.argv[3]);

// route
app.get('/home', function(req, res) {
  res.render(
  	'index.jade', {
  		date: new Date().toDateString()
  	});
});

// the second argument will be the port number
app.listen(process.argv[2]);

// expressworks tutorial
// example #5

// stylish_css.js

/*
 * Again, if you try to use the official solution 
 * you will fail the validation test.
*/

// declaration section
var express = require('express');
var stylus = require('stylus');
var path = require('path');

var app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(stylus.middleware(path.join(__dirname, 'public')));


/* Official solution
app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]))
*/

// the second argument will be the port number
app.listen(process.argv[2]);
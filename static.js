// expresswroks tutorial
// example #4

// static.js

/*
 *	You will NOT pass the verification test if you decide to use the official solution.
 *	Therefore, use the other solution.
*/

// declaration section
var express = require('express');
var path = require('path');
var app = express();

// correct solution
app.use(
	express.static(path.join(__dirname, 'public'))
);

/* Official solution
   The 3rd argument will be the index.html file
app.use(
	express.static(process.argv[3] || path.join(__dirname, 'public'))
);
*/

// the second argument will be the port number
app.listen(process.argv[2]);

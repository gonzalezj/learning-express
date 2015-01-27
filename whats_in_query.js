// expressworks tutorial
// example #7

// whats_in_query.js

// declaration section
var express = require('express');
var app = express();

// correct solution to pass the verification test
app.get('/', function(req, res){
	var query = req.query;
	res.send(query);
});

/* Official solution
 * app.get('/search', function(req, res){
 *	var query = req.query;
 *	res.send(query);
 *	});
*/

// the second argument will be the port number
app.listen(process.argv[2]);

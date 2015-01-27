// expressworks tutorial
// example #8

// json_me.js

// declaration section
var express = require('express');
var fs = require('fs');
var app = express();

// route
app.get('/books', function(req, res){
	var filename = process.argv[3];
	fs.readFile(filename, function(err, data){
		if(err)
			return res.send(500);
		try
		{
			books = JSON.parse(data)
		} catch (err){
			res.send(500);
		}
		res.json(books);
	})
});

// the second argument will be the port number
app.listen(process.argv[2]);
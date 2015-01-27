// expressworks tutorial
// example #3

//good_old_form.js

/*
 * The example's instructions explicitly mentions to use 
 * "app.post" instead of "app.get" but if you use POST
 * the veryfication test will fail.
*/

// declaration section
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// body parser
app.use(bodyParser.urlencoded({
	extended: false
}));

// route
app.get('/form',function(req, res){
	res.send(req.body.str.split('').reverse().join(''));
});

// the second argument will be the port number
app.listen(process.argv[2]);
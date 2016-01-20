
var express = require('express');

//initializing express object
var app = express();

app.get(
		'/',function(req,res){
			res.sendFile(__dirname +'/public/index.html');
		}
	);
app.get(
		'/contacts',function(req,res){
			res.sendFile(__dirname +'/public/contacts.html');
		}
	);

app.listen(8000);
console.log('server initiated on port 8000');

var express = require('express');
var bodyParser = require('body-parser');


var app= express();

 app.use(bodyParser.urlencoded({extended:false}));

app.get(
		'/',function(req,res){
			res.sendFile(__dirname+'/public/index.html');
		}

	);
app.post(
			'/login',function(req,res){
				var user_name= req.body.user;
				var password =req.body.password;

				console.log('user is:'+user_name +"password is:"+password);
				res.end(user_name);
			}

	);
app.listen(8001);
console.log('server at 8001 started');
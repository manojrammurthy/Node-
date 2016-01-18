var http = require('http');
var url = require('url');

http.createServer(
	function(request,response){
		response.writeHead(200,{'content-Type':'text/plain'});
		var params = url.parse(request.url,true).query;
		var Input = params.number;
		var numInput = new Number(Input);
		var numOutput = new Number(Math.random()*numInput).toFixed(0);
		response.write(numOutput);

		response.end();
	}).listen(4000);
console.log('server2 initialized');
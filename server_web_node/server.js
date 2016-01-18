var http = require('http');

http.createServer(
function(request,response){
	response.writeHead(200,{'content-Type':'text/plain'});
	response.end('welcome to node js course');
}).listen(3002);

console.log('server initialized');

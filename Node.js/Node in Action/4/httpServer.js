var http = require('http');

var server = http.createServer(function(req,res){
	var body = "<h1>title</h1>" +"<p>the first wish</p>" +"<span>want you</span>";
	res.setHeader('Content-Type','text/html');
	res.end(body);
});

server.listen(1111);

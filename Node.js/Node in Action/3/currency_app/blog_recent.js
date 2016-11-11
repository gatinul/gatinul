// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(req,res){
// 	if(req.url == '/'){
// 		fs.readFile('./titles.json',function(err,data){
// 			if(err){
// 				console.warn(err);
// 				res.end('Server Error');
// 			}
// 			else{
// 				var titles = JSON.parse(data.toString());
// 				fs.readFile('./template.html',function(err,data){
// 					if(err){
// 						console.log(err);
// 						res.end('Server Error');
// 					}
// 					else{
// 						var tmpl = data.toString();
// 						var html = tmpl.replace('%',titles.join('<li></li>'));
// 						res.writeHead(200,{'content-Type':'text/html'});
// 						res.end(html);
// 					}
// 				});
// 			}
// 		});
// 	}
// }).listen(8000,'127.0.0.1');
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	getTitles(res);
}).listen(8000);

console.log('Server at 127.0.0.1:8000');

// 取json中的所有标题 成功的话执行取html内容的函数
function getTitles (res){
	fs.readFile('./titles.json',function(err,data){
		if(err) return hadError(err,res);
		getTemplate(JSON.parse(data.toString()),res);
	});
}

// 取html内容，成功的话执行替换内容函数
function getTemplate(titles,res){
	fs.readFile('./template.html',function(err,data){
		if(err) return hadError(err,res);
		formaHtml(titles,data.toString(),res);
	});
}

// 替换内容函数
function formaHtml(titles,tmpl,res){
	var html = tmpl.replace('%',titles.join('<li></li>'));
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(html);
}

// 所有的报错函数
function hadError(err,res){
	console.log(err);
	res.end('Server Error');
}

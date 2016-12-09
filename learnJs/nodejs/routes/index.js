// var Photo = require('./models/Photo');
// var photo = new Photo();
var redis = require('redis');
var client = redis.createClient(6379,'127.0.0.1');

exports.submit = function(req,res){
	//res.render('show',{path:req.file.filename});
	res.render('show');
	client.set('path',req.file.filename);

};


exports.main = function(req,res){
	res.render("index");
};

exports.find = function(req,res){
	client.get('path',function(err,data){
		res.end(data);
	});
};

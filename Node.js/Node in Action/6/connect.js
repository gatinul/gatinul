var connect = require('connect');
var mongoose = require('mongoose');
var app = connect();
app.use(logger);
app.use('/admin', restrict); // 挂载admin
app.use('/admin', admin);
app.use(hello);
app.listen(3000);


//mongo数据库操作
// var db = mongoose.connect('mongodb://localhost/authors');
// var Schema = mongoose.Schema;
// var Authors = new Schema({
// 	name : String,
// 	password : String
// });
// mongoose.model('Author',Authors);
// var Author = mongoose.model('Author');
// var author = new Author();
// author.name = ['lyt','sxy','wade','kobe'];
// author.password = 'gatinul16';
// author.save(function(err){
// 	if(err) throw err;
// 	console.log('Can login');
// });

function logger(req,res,next){
	console.log('%s %s',req.method,req.url);
	next();
}

function hello(req,res){
	res.setHeader('Content-Type','text/plain');
	res.end('hello world');
}

function restrict(req,res,next){
	var authorization = req.headers.authorization;
	if(!authorization) return next(new Error('Undefined t'));

	var parts = authorization.split(' '); //分割字符串 以空格
	var scheme = parts[0];
	var auth = new Buffer(parts[1],'base64').toString().split(':');
	var user = auth[0]; // 拿到用户名
	var pass = auth[1]; // 拿到密码

	authenticateWithDatabase(user,pass,function(err){
		if(err) return next(err);
		next();
	});
}

function authenticateWithDatabase(user, pass, callback) {
  var err;
  if (user != 'tobi' || pass != 'ferret') {
    err = new Error('Unauthorized');
  }
  callback(err);
}

function admin(req,res,next){
	switch (req.url){
		case '/':
			res.end('try users');
			break;
		case '/users':
			res.setHeader('Content-Type','application/json');
			res.end(JSON.stringify(['tobi', 'loki', 'jane']));
			break;
	}
}

var express= require("express");
var app = express();
var routes = require('./routes');
var multer = require("multer");
var ejs = require('ejs');
var serveStatic = require('serve-static');
var path = require('path');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
    cb(null, 'public/');
  	},
	filename: function (req, file, cb) {
  	cb(null, file.originalname);
	}
});

var upload = multer({ storage: storage });
var path = require('path');


app.use(upload.single('upload'));
app.use(serveStatic(path.join(__dirname,'public'))); //配置静态文件目录
//app.set("view engine","ejs");//使用ejs引擎
app.set('views', path.join(__dirname, 'views'));//设置views路径
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.get('/',routes.show);

app.post('/upload',routes.submit);

// app.post("/upload",function(req,res){
//     var file = req.file;
//     console.log(file.destination);//打印file
// 	console.log(file.filename);
// });
app.listen(3000,function(){
    console.log("success") ;//服务器监听3000端口
});

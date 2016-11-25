var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/person'); //person是一个数据库

var Schema = mongoose.Schema;
var Person = new Schema({
	birthday:String,
	hobby:String
});

mongoose.model('Love',Person);//把Person这个信息组发布出去，Love作为名字

var Love = mongoose.model('Love'); //拿到这个信息组
var love = new Love(); // love 会被以复数形式做个表 loves  ！！！实例化Love

love.birthday = 'Sep 29';
love.hobby = 'eat and sleep';
love.save(function(err){
	if(err) throw err;
	console.log('love message saved');
});

//更新文档

Love.update(
	{_id:'5836b2d2dd4866249cd0a251'}, // id 每次自动生成  MongoBooster上能看见
	{hobby:'sports and eat'},
	{multi:false}, //只更新一个文档
	function(err,rows_updated){
		if(err) throw err;
		console.log('success');
	}
);

Love.findById('5836b2d2dd4866249cd0a251',function(err,data){
	data.remove();
});

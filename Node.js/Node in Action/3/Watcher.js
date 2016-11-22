// 建一个构造器 watchDir被监控的目录  processDir放置改完的文件的目录
function Watcher(watchDir,processedDir){
	this.watchDir = watchDir;
	this.processedDir = processedDir;
}

var events = require('events');
var util = require('util');

// 用来做继承的 相当于 Watcher.prototype = new events.EventEmitter();
util.inherits(Watcher,events.EventEmitter);

var fs = require('fs');
var watchDir = './watch';
var processedDir = './done';

Watcher.prototype.watch = function(){
	var watcher = this;
	fs.readdir(this.watchDir,function(err,files){ // 详见 fs.readdir 方法
		if(err) throw err;
		for(var index in files){// 处理watch目录中的所有文件
			watcher.emit('process',files[index]); //暴露出去
		}
	});
};

Watcher.prototype.start = function(){
	var watcher = this;
	fs.watchFile(watchDir,function(){  // 详见 fs.watchFile 方法
		watcher.watch();
	});
};
// 以上 定义了一个Watcher 类
var watcher = new Watcher(watchDir,processedDir);

// watcher 继承了事件发射器的on方法
watcher.on('process',function process(file){
	var watchFile = this.watchDir+'/'+file; //  加成一个类似 watch/TEST.js 的字符串 存于watchFile变量中
	var processedFile = this.processedDir+'/'+file.toLowerCase(); //同理，toLowerCase 变小写
	fs.rename(watchFile,processedFile,function(err){//fs.rename  移动或重命名 参数分别为旧路径，新路径，回回调
		if(err) throw err;
	});
});

watcher.start();

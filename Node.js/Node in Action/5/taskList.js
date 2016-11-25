var fs =require('fs');
var path = require('path');
var args = process.argv.splice(2);// 只留下参数
var command = args.shift(); //取出第一个参数
var taskDescription = args.join(' '); // 合并剩余的参数
var file = path.join(process.cwd(), '/.tasks'); // 根据当前的工作目录解析数据库的相对路径

switch (command) {
	case 'list':
		listTasks(file);
		break;
	case 'add':
		addTask(file,taskDescription);
		break;
	default:
		console.log('Usage:'+process.argv[0]+'list|add [taskDescription]');
}

function listTasks(file){
	loadOrInitializeTaskArray(file,function(tasks){
		for(var i in tasks){
			console.log(tasks[i]);
		}
	});
}

function loadOrInitializeTaskArray(file,cb){
	 fs.exists(file,function(exists){
		 var task = [];
		 if(exists){
			 fs.readFile(file,'utf-8',function(err,data){
				 if(err) throw err;
				 //var data = data.toString();
				 data = data.toString();
				 tasks = JSON.parse(data || '[]');
				 cb(tasks);
			 });
		 }else{
			 cb([]);
		 }
	 });
}

function addTask(file,taskDescription){
	loadOrInitializeTaskArray(file,function(tasks){
		tasks.push(taskDescription);
		storeTasks(file,tasks);
	});
}

function storeTasks(file,tasks){
	fs.writeFile(file,JSON.stringify(tasks),'utf-8',function(err){
		if(err) throw err;
		console.log('Saved.');
	});
}

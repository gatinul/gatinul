// nimble 流程化 让函数一个一个执行
var flow = require('nimble');

flow.series([
	function(callback){
		setTimeout(function(){
			console.log('first');
			callback();
		},500);
	},
	function(callback){
		setTimeout(function(){
			console.log('second');
			callback();
		},500);
	},
	function(callback){
		setTimeout(function(){
			console.log('third');
			callback();
		},300);
	},
]);

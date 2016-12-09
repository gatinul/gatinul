// var redis = require('redis');
// var client = redis.createClient(6379,'127.0.0.1');

var vm = avalon.define({
	$id:"test",
	path: "",
	lname:"ttt"
});

$('img').click(function(event) {
	/* Act on the event */
	$('img').css('display', 'none');
});

$.get('/find',function(data){
	vm.path = data;
});

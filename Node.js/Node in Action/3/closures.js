function asyncFunction(callback){
	setTimeout(callback,200);
}
var color = 'blue';
(function(color){
	asyncFunction(function(){
		console.log('The color is '+color);
	});
})(color);

color = 'green';


setTimeout(function(){
	console.log('first');
	setTimeout(function(){
		console.log('second');
		setTimeout(function(){
			console.log('third');
		},500);
	},500);
},500);

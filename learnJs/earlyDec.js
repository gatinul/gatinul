//声明提前

var tt = 'aa';
function test(){
	console.warn(tt); // undefined 
	var tt ='dd';
	console.warn(tt); // dd 
}
test();

//因为之前 tt变量在函数里重新声明了 且声明提前 无论var写在哪赋值 其实都是在顶部声明的
// 上面代码跟下面的一样

var tt = 'aa';
function test(){
	var tt; // tt声明了 没值 undefined
	console.warn(tt);
	tt = 'dd'; // 给tt赋值了 dd
	console.warn(tt);
}
test();


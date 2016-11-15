// 代码1
function makeFun(){
	var sname = 'sxy';
	function funny(){
		console.warn(sname);
	}
	return funny;
}
var myFun = makeFun();
myFun();
// 代码2
function makeFun(){
	var sname = 'sxy';
	function funny(){
		console.warn(sname);
	}
	return funny();
}
makeFun();

/* 上面两个实现效果一样  1代码让myFun成为一个闭包 闭包做两件事，一个函数还有这个函数的环境
 闭包最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
*/


//代码1
function makeFun(){
	var sname = 'sxy';
	function funny(age){
		console.warn(sname+':'+age);
	}
	return funny;
}
var myFun = makeFun();
myFun(21); // (21)传的funny函数的值
//代码2
function makeFun(){
	var sname = 'sxy';
	function funny(age){
		console.warn(sname+':'+age);
	}
	return funny();
}
makeFun(21); // 传不到funny函数里去
// 代码3
function makeAdder(x) {
  function gat (y) {
   console.log(x + y);
  }
  return gat;
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
add5(2);
// 代码4
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
};
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */

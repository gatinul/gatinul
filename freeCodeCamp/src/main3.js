var perClick = '';//选择X还是O
var comClick = '';
var winArr = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
]
var gameNum = 0; //数组中0的个数
var getId = '';
$(document).ready(function(){
	
	selectXO();
	play();
	
});
function selectXO(){
	$('#Ticmodal').modal({backdrop: 'static', keyboard: false});
	$('#Ticmodal').modal('show');
	$('.btn').click(function(){
		var XO = ($(this).text());
		perClick = XO;
		if(perClick == 'X'){
			comClick = 'O';
		}
		else{
			comClick = 'X';
		}
		$('#Ticmodal').modal('hide');
	});
	
}
function play(){
	$('.col-md-4').click(function(){
		getId = this.id;
		changeName();
		winArr[a][b]=1;
		console.log(winArr)
		$(this).html('<p class="showXO">'+perClick+'</p>');
		endGame();
	})
	
}
//平局
function endGame(){ 
	for(var i=0;i<winArr.length;i++){
		for(var j=0;j<3;j++){
			if(winArr[i][j] == 0){
				gameNum++;
			};
		}
	}
	console.log(gameNum);
	if(gameNum<1){
		alert("平局，游戏结束");
	}
	gameNum = 0;
}
function test(){
	console.log(gameNum)
}
function changeName(){
	switch (getId) {
		case "top-left":
		a='0';
		b='0';
		break;
		case "top-mid":
		a='0';
		b='1';
		break;
		case "top-right":
		a='0';
		b='2';
		break;
		case "mid-left":
		a='1';
		b='0';
		break;
		case "mid-mid":
		a='1';
		b='1';
		break;
		case "mid-right":
		a='1';
		b='2';
		break;
		case "foot-left":
		a='2';
		b='0';
		break;
		case "foot-mid":
		a='2';
		b='1';
		break;
		case "foot-right":
		a='2';
		b='2';
		break;
	}
}

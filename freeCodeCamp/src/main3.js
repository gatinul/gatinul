var perClick = '';//选择X还是O
var comClick = '';// 电脑用X还是O
var winArr = [0,0,0,0,0,0,0,0,0]; // 用来填1或-1
var getId = ''; //获得玩家点击的div的id
var comLength = 9; //剩余九宫格的数量
var positions = ['top-left','top-mid','top-right','mid-left','mid-mid','mid-right','foot-left','foot-mid','foot-right'];
$(document).ready(function(){
	
	selectXO(); //选择 X O;
	play(); //下棋
	
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
		//console.log('长'+comLength);
		getId = this.id; 
		changeName(getId); 
		if(winArr[a] == 0){
			winArr[a]=1;
			comLength--; //
			removeByValue(positions, getId);
			//console.log(positions);
			$(this).html('<p class="showXO">'+perClick+'</p>');
			win();
			endGame();
		}
		else{
			return false;
		}
		
//		console.log(comArr.length);
//		电脑
		var comNum = Math.floor((Math.random()*comLength));//得到0-com.length 长度的整数
//		console.log(comNum);
		var composition = document.getElementById(positions[comNum]);


//		console.log(composition);
		$(composition).html('<p class="showXO">'+comClick+'</p>')
		comLength--;
		var removeId = positions[comNum];
		changeName(removeId);
		if(winArr[a]==0){
			winArr[a]= -1;
			console.log(winArr);
	//		console.log(removeId);
			removeByValue(positions, removeId);
	//		console.log(positions);
			win();
			endGame();
		}
		
		
	})
	
}
//平局
function endGame(){ 
	
	if(comLength<1){
		alert("平局，重新开始");
		upload();
	}

}
//重新加载棋盘
function upload(){
	winArr = [0,0,0,0,0,0,0,0,0];
	comLength = 9;
	positions = ['top-left','top-mid','top-right','mid-left','mid-mid','mid-right','foot-left','foot-mid','foot-right'];
	round = 0;
	$('.col-md-4').html('');
}

function changeName(yuansu){
	switch (yuansu) {
		case "top-left":
		a='0';
		break;
		case "top-mid":
		a='1';
		break;
		case "top-right":
		a='2';
		break;
		case "mid-left":
		a='3';
		break;
		case "mid-mid":
		a='4';
		break;
		case "mid-right":
		a='5';
		break;
		case "foot-left":
		a='6';
		break;
		case "foot-mid":
		a='7';
		break;
		case "foot-right":
		a='8';
		break;
	}
}

//电脑落子
function comPlay(){
	var comPosition = $('.able');
	console.log(comPosition);
}
function win(){
	if((winArr[0]+winArr[1]+winArr[2])==3||(winArr[0]+winArr[3]+winArr[6])==3||
		(winArr[1]+winArr[4]+winArr[7])==3||(winArr[2]+winArr[5]+winArr[8])==3||
		(winArr[3]+winArr[4]+winArr[5])==3||(winArr[6]+winArr[7]+winArr[8])==3||
		(winArr[0]+winArr[4]+winArr[8])==3||(winArr[2]+winArr[4]+winArr[6])==3){
			alert('您赢了');
			upload();
			return 10;
		}
	else if((winArr[0]+winArr[1]+winArr[2])== -3||(winArr[0]+winArr[3]+winArr[6])== -3||
		(winArr[1]+winArr[4]+winArr[7])== -3||(winArr[2]+winArr[5]+winArr[8])== -3||
		(winArr[3]+winArr[4]+winArr[5])== -3||(winArr[6]+winArr[7]+winArr[8])== -3||
		(winArr[0]+winArr[4]+winArr[8])== -3||(winArr[2]+winArr[4]+winArr[6])== -3){
			alert('您输了');
			upload();
		}
	else{};
}
//删除数组中的元素
function removeByValue(arr, val) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
}

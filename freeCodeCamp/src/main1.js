$(document).ready(function(){
	var top = 10;
	$('#sendMessage').click(function() {

		if(top <= 350) {
			top += 30;
			console.log(top);
		}
		else{
			top = 10;
		}
		// 获取颜色
		function rgb() {
			var rgb = ['blue', 'deeppink', 'red', 'green', 'saddlebrown']
			var index = Math.floor((Math.random() * rgb.length));
			return rgb[index];
		}
		var messageColor = rgb();
		//alert(messageColor);
		var sendMessage = $('#genMessage').val();
		var showMessage = $('.showbox');
		var message = $('<span class="messagePosition">' + sendMessage + '</span>');
		$(message).css('color', messageColor);
		//	console.log(top);
		$(message).css('top', top);
		//	for(var top=10;top<400;top+=30){
		//		console.log(top);
		//		$('.messagePosition').css('top',top);
		//	}
		showMessage.append(message);
		// 做清空初始化
		var message = '';
		$('#genMessage').val('');
	});
	//enter键发送 enter键的ASCII是13
	$('#genMessage').keypress(function(event) {
		if(event.keyCode == 13) {
			$('#sendMessage').trigger('click');
		}
	});
	// 清屏
	$('#emptyMessage').click(function() {
		console.warn('222');
		$('.showbox').empty();
		$('#genMessage').val('');
	});
	// 设置每50秒 清屏一次
	function empty1() {
		$('.showbox').empty();
	}
	setInterval(empty1, 50000);
});





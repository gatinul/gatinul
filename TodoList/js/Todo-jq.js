$(document).ready(function(){
	var $todoInput = $('#todoInput');
	var $todoList = $('#todoList');
	var $todoForm = $('#todoForm');
	var $todoCount = $('#todoCount');
	function count(){
		var len = $todoList.children().length;
		if(len === 0){
			$todoCount.html('');
		}
		else{
			$todoCount.html('现有'+len+'项todo list:');
		}
	}

	$todoForm.submit(function(e){
		//e.preventDefault();
		var inputVal = $('#todoInput').val();
		if(inputVal === ""){
			alert('内容不能为空');

		}
		else{
			$todoList.append('<li>'+inputVal+'&nbsp;<a href="#" class="todoDel">x</a></li>');

			$todoInput.val('');
			count();
		}

		return false;
	});

	//！！！！ jquery on（）
	$todoList.on('click','.todoDel',function(e){
		$(this).parent().remove();
		count();
	});
});

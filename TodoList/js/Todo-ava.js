var vm = avalon.define({
	$id:"todos",
	text:"",
	todolist:[],
	add:function(e){
		e.preventDefault();
		// !!vm.text.trim()&&vm.todolist.push(vm.text);
		if(!!vm.text.trim()){
			vm.todolist.push(vm.text);
		}
		vm.text = "";
	}
});

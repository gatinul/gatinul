angular.module('Todo',[])//[]放模块依赖的模块
	.controller('c1',function($scope){

		$scope.todolist = [];
		$scope.add = function($event){
			$event.preventDefault();
			$scope.todolist.push($scope.text);
			$scope.text = '';
		};


	});

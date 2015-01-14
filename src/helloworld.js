var app = angular.module("helloworldApp", []);

app.controller("HelloworldCtrl", function($scope, $http) {
	
	$scope.hello = function() {
		$http.get('api/hello').success(function(data) {
			$scope.content = data.content;
		});
		console.log($scope.content);
	};
});

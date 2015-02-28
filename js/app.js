angular.module("traveler", []).controller("main", function($scope, $http) {
	$scope.view = 'home';
	$scope.goTo = function(page) {
		$scope.view = page;
	};
});
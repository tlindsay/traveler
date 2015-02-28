angular.module("traveler", []).controller("main", function($scope, $http) {
	$scope.view = 'home';
	$scope.history = [];//array to store the history stack (for use with back button)
	$scope.subView = 0;//For tabs in pages
	$scope.images = [0,1,2,3,4,5,6,7,8,9];//just some dummy values for connection images
	$scope.trip = '';//variable to store selected trip
	
	$scope.goTo = function(page) {
		$scope.history.push($scope.view);
		$scope.view = page;
		$scope.subView = 0;//Reset the tab to the default every time a new page is loaded
	};
	
	$scope.back = function(){
		if($scope.history.length > 0) {
			$scope.view = $scope.history.pop();
			$scope.subView = 0;
		}
	}
});

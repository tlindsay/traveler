angular.module("traveler", ['mobile-angular-ui','ngRoute'])

.config(function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl:'partials/home.html'
      });
      $routeProvider.when('/bookLodging', {
        templateUrl:'partials/bookLodging.html'
      });
      $routeProvider.when('/connection', {
        templateUrl:'partials/connection.html'
      });
      $routeProvider.when('/connections', {
        templateUrl:'partials/connections.html'
      });
      $routeProvider.when('/editTrip', {
        templateUrl:'partials/editTrip.html'
      });
      $routeProvider.when('/hostHome', {
        templateUrl:'partials/hostHome.html'
      });
      $routeProvider.when('/newTrip', {
        templateUrl:'partials/newTrip.html'
      });
      $routeProvider.when('/newTripInterests', {
        templateUrl:'partials/newTripInterests.html'
      });
      $routeProvider.when('/profile', {
        templateUrl:'partials/profile.html'
      });
      $routeProvider.when('/scheduleActivity', {
        templateUrl:'partials/scheduleActivity.html'
      });
      $routeProvider.when('/travelerHome', {
        templateUrl:'partials/travelerHome.html'
      });
      $routeProvider.when('/chat', {
        templateUrl:'partials/chat.html'
      });
  })
  
.controller("main", function($scope, $location) {
	$scope.view = 'home';
	$scope.history = [];//array to store the history stack (for use with back button)
	$scope.subView = 0;//For tabs in pages
	$scope.images = [0,1,2,3,4,5,6,7,8,9];//just some dummy values for connection images
	$scope.alertSuccess = false;

	$scope.selectedImage='';

	$scope.fuckery = {
		fucked : true
	};
	
	$scope.profile = {};
	$scope.profile.name = "John Smith";
	$scope.profile.hometown = "Florence, Alabama";
	$scope.profile.bio = "Hello world!";
	
	$scope.newTrip = {};
	$scope.newTrip.location = {city:"New York",state:"New York",country:"United States"};
	$scope.selectedTrip = '';//variable to store selected trip
	
	$scope.trips = ['Tokyo, Japan','Madrid, Spain','Kuala Lumpur, Malaysia'];//sample trips the user has

	$scope.interests = [
		{
			name: 'Skiing',
			fuckery: 0
		},
		{
			name: 'Hiking',
			fuckery: 0
		},
		{
			name: 'Web Development',
			fuckery: 0
		},
		{
			name: 'Music',
			fuckery: 0
		},
		{
			name: 'a',
			fuckery: 0
		},
		{
			name: 'b',
			fuckery: 0
		},
		{
			name: 'c',
			fuckery: 0
		},
		{
			name: 'd',
			fuckery: 0
		},
		{
			name: 'e',
			fuckery: 0
		}
	];
	
	$scope.setImage = function(img) {
		$scope.selectedImage = 'images/faces/'+img+'.jpg';
	}

	$scope.setTrip = function(trip) {
		$scope.selectedTrip = trip;
	}

	$scope.goTo = function(page) {
		console.info('GOING TO %s', page);
		if(page == 'home') {
			page = '';
		}
		$scope.history.push($location.path());
		$location.path('/'+page);
		$scope.subView = 0;//Reset the tab to the default every time a new page is loaded
		$scope.alertSuccess = false;//reset success alert
	};
	
	$scope.goBack = function(){
		if($scope.history.length > 0) {
			$location.path($scope.history.pop());
			$scope.subView = 0;
		}
	}
});

function changeToGreen(button) {
	jQuery(button).removeClass('btn-primary');
	jQuery(button).addClass('btn-success');
}

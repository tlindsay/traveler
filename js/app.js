var app = angular.module('traveler', []);

app = angular.module('traveler', /*["ngRoute","mobile-angular-ui"]*/)
				 /*.config(function($routeProvider) {
					$routeProvider.when('/', {
						templateUrl: 'partials/home.html'
						//controller: 'appController'
					});
					$routeProvider.when('/profile', {
						templateUrl: 'partials/profile.html'
						//controller: 'appController'
					});
				 })*/
				 .controller('appController', [
					'$scope',
					'$location',
					function($scope, $location) {
						// console.log('hello, angular!');
					}
				]);

.controller
		(
			'LoginCtrl',
			[
				'$scope',
				'$rootScope',
				'$location',
				'$http',
				'APIURL',
				function($scope, $rootScope, $location, $http, APIURL)
				{

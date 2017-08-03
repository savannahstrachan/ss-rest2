angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: '/views/main.html',
			controller: 'MainController'
		})

		.when('/form', {
			templateUrl: '/views/form.html',
			controller: 'FormController'
		})

		.when('/display', {
			templateUrl: '/views/display.html',
			controller: 'DispController'



		})



	$locationProvider.html5Mode(true);

}]);
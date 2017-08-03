angular.module('formCtrl', []).controller('FormController', 
    function($scope, $http) {

    


    	$scope.addRest = function(response){
			
			console.log($scope.inputData);
    	
    	$http.post("https://restaurant-db-test.herokuapp.com/add-restaurants",
    		$scope.inputData).then(function(err, res){

    			$scope.inputData = {};
    			// res.send($scope.inputData);
    		})
        	}
        });


  //      $scope.createRestaurant = function(response){
   
  //  $http.post(URL+'/create-restaurant', $scope.newRestaurant).then(function(res){

  //    $('.alert').toggle();
   
  //    $scope.newRestaurant = {};

	
	
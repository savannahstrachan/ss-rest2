angular.module('displayCtrl', []).controller('DispController', 
    function($scope, $http, MainServ) {


 // $scope.dispClick = function (res){
 	$scope.displayName = MainServ.getName();
       console.log($scope.displayName);
      

      


// $scope.myFunc = function(response) {
//       console.log($scope.formData);
//        $http.get("https://restaurant-db-test.herokuapp.com/restaurants", 
//         $scope.formData).then(function(res){
//           $scope.formData = {};
//         console.log(res.data);
//        $scope.blake=res.data;




       }); 
//      }







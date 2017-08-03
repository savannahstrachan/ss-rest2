angular.module('mainCtrl', []).controller('MainController', 
    function($scope, $http, $location, MainServ) {

    //init showme variable to be false
    $scope.showMe = false;
    $scope.showHun = "null";
    $scope.showFan = "null";
    $scope.showMon = "null";
    //init function in javascript



    $scope.myFunc = function(response) {
      console.log($scope.formData);
       $http.post("https://restaurant-db-test.herokuapp.com/display-restaurants", 
        $scope.formData).then(function(res){
          $scope.formData = {};
        console.log(res.data);
       $scope.blake=res.data[0];
       }); 
     }

  
    //init function in javascript
    $scope.hunClick = function() {
      console.log('hellooo');
     
      $scope.showHun = "hungry";
    }
        
    $scope.fanClick = function() {
        console.log('hellooo');

        $scope.showFan = "fancy";

    }
    $scope.monClick = function() {
        console.log('hellooo');

        $scope.showMon = "money";
 }
    $scope.dispClick = function(data) {
      console.log(data);
      $scope.dispData = data;
      console.log($scope.dispData);
     // $scope.dispData = {};
     MainServ.detail($scope.dispData);
     
      $location.path('/display');

    }


});



//init showme variable to be false
    
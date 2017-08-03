angular.module('mainService', []).service('MainServ', 
	['$http', function($http) {

	var name = "";
	

		return {

		detail: function(value){
			name = value;
			console.log(name);
		},


		getName: function(){
			console.log("printing out name in get name function in service:", name);
			return name;
		
		}

		}	
			


	

}]);
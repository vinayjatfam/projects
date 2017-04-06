(function(){
	var app = angular.module("gitHubViewer", []);

	var MainController = function($scope, $http){


	var onUserComplete = function(response){
		$scope.user = response.data;
		$http.get("https://api.github.com/users/angular/repos")
		.then(onRepos, onError)
	};

	var onRepos = function(response){
		$scope.repos = response.data;
	};

	var onError = function(reason){
		$scope.error = "Could not find the user";
	};

	
	var search = function(username){
		$http.get("https://api.github.com/"+ username)
		.then(onUserComplete, onError);

	};
//the above line $http.get gets a promise because this is an async call and this promise once executed whille call the promise.then(onUserComplete)
// the onUserComplete gets the http response from the github api and populates the data in the view
//and if there is any problem with onUserComplete then the onError messsage will be displayed.
	$scope.username = "angular";
	$scope.message = "Hi gitHubViewer";
	//ng-model is a usefull directive to push the data from view to model and this is used in input, text, selects, text area etc
	
};
	app.controller("MainController", ["$scope", "$http",MainController]);

	//["$scope", "$http",MainController] the array before being [Maincontroller] is populated in such a manner because during minification the main controller function that is
	//var MainController = function($scope, $http)  will be changed to var MainController = function(n, h) so that it reduces the size that is the reason why
	//in the module.controller("MC", []) the order of the paramerters passed are put inside an array

}());

	
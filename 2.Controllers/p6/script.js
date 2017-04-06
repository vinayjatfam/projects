var MainController = function($scope, $http){

	var onUserComplete = function(response){
		$scope.user = response.data;
	};

	var onError = function(){
		$scope.error = "Could not find the user";
	}

	$http.get("https://api.github.com/users/robconery")
		 .then(onUserComplete, onError);
//the above line $http.get gets a promise because this is an async call and this promise once executed whille call the promise.then(onUserComplete)
// the onUserComplete gets the http response from the github api and populates the data in the view
//and if there is any problem with onUserComplete then the onError messsage will be displayed.
	$scope.message = "Hi There Angular";
	
};


	
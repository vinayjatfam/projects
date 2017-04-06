var MainController = function($scope){

	var person = {
		firstname: "Vinay",
		lastname: "Ravindra",
		imagesrc: "file:///C:/Users/Vinay/Desktop/Work/AngularJS/prac/vinay.jpg"
	}

	$scope.message = "Hi There Angular";
	$scope.person = person;
};


	/* before angular loads: <img src="{{person.imagesrc}}"  >
	after angular loads:      <img src="file:///C:/Users/Vinay/Desktop/Work/AngularJS/prac/vinay.jpgs"*/


	//Also every time the image laods using img src it logs an error in to the console i.e image not found error. in order to avoid this we have an directive ng-src
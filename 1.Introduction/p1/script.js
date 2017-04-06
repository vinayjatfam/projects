var work = function(){

	console.log("working part");
}


var dowork = function(f){
	f();
}


dowork(work);
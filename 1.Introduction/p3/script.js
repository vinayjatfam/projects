//IIFE
// global variable are downright evil because JS is a dynamically typed language and these variable can be overided by other programs and can fail to function.
(function(){
function createWorker(){
	var workCount = 0;
	var work1 = function(){
		workCount++;
		console.log("task 1 " + workCount);

	};

	var work2 = function(){
		workCount++;
		console.log("task 2 " + workCount );
	};
	return{
		job1: work1,
		job2: work2
	};
};


var worker = createWorker();

worker.job1();
worker.job2();	
	}());



//here dowork is the function which passes the work and "work" is the function which actually does the work and hence they are function as abtractions.
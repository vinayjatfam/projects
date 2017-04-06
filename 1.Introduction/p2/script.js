/*this module is called as revealing module pattern.  It's a module because
what we've done is encapsulate some code inside of a function, and a module,
the general meaning of that term in computer science and software development
in general, some collection of components or features that you can put
together to perform some useful work. So we're creating a module in JavaScript
by defining a function. Inside of that function building up some things that
we can use and expose to the outside world, and we can even have some private
implementation details; for example, if I create a variable called workCount
that counts the number of times that task1 and task2 have been invoked. That's
not something that I want to expose to the outside world and allow them to
manipulate it. It's just something that I want to use an internal
implementation detail and perhaps each time these methods are invoked */

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

//here dowork is the function which passes the work and "work" is the function which actually does the work and hence they are function as abtractions.
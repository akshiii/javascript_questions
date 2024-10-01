//We can assume this process function take a long time to return the data / its a time taking task
function process(i){
	console.log(i);
}

//This call to process fu if written like this, will block the Render queue,a nd any other task will have to wait for a long time to execute.
[1,2,3,4,5].forEach((i)=>{
	process(i)
})

/**
 * If we want that at any point of time if we have a high priority task/ quick logic / user activity to serve
	than we can wrap this process fu in a setTimeout of 0 seconds. This will move these calls to a diff queue(callback queue)
	and whenever a high priority task comes it can cater to that first.
	This way we are keeping our app responsive, and we giving a slice of execution to our long running processes
 */
[1,2,3,4,5].forEach((i)=>{
	setTimeout(()=>{
		process(i);
	},0)
})

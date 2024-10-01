
function flatt(arr, depth = 1){
	let finalArr = [];
	return flatten(arr,depth,finalArr);
}
function flatten(arr, depth = 1, finalArr){
	for(let i = 0; i< arr.length; i++){
		if(Array.isArray(arr[i]) && depth != 0){
			flatten(arr[i], depth-1, finalArr);
		}
		else{
			finalArr.push(arr[i]);
		}
	}
	return finalArr;
}

console.log(flatt([ 1, [2], 3, [ 4, 5, [ 6, 7, [ 8 ] ] ], 9, 10 ], 2));
console.log(flatt([ 1, 2, 3, [ 4, 5, [ 6, 7, [ 8 ] ] ], 9, 10 ], Infinity));
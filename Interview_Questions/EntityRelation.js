//Unsolved~~~
let relationObj = {};
function printRelationObject(list){
	for([child , parent] of list){
		console.log(child, parent);

		if(relationObj[child]){
			let newChild = relationObj[child];
			delete relationObj[child];
			relationObj[parent] = {[child]: newChild};
		}
		else if(relationObj[parent]){
			let innerObj = relationObj[parent];
			innerObj[child] = {};
		}
		else{
			printRelationObject()
			relationObj[parent] = {[child] : {}};
		}

	};
}


let input = [
	["lion", "cat"],
	["cheetah", "cat"],
	["female_lion", "lion"],
	["baby_lion", "lion"],
	["cat", "mammal"],
	["dog", "mammal"],
	["mammal", "animal"],
	["fish", "animal"],
	["shark", "fish"],
  ];
printRelationObject(input);
console.log(relationObj);
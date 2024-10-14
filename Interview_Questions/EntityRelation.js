//Unsolved~~~
let relationObj = {};
function printRelationObject(list){
	list.forEach(listItem => {
		console.log(listItem[0], listItem[1]);

		if(relationObj[listItem[0]]){
			let newChild = relationObj[listItem[0]];
			delete relationObj[listItem[0]];
			relationObj[listItem[1]] = {[listItem[0]]: newChild};
		}
		else if(relationObj[listItem[1]]){
			let innerObj = relationObj[listItem[1]];
			innerObj[listItem[0]] = {};
		}
		else{
			printRelationObject()
			relationObj[listItem[1]] = {[listItem[0]] : {}};
		}

	});
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
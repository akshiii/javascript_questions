let relationObj = {};
function fillObj([child, parent]) {
  console.log(child, parent);

  if (relationObj[child]) {
    let newChild = relationObj[child];
    delete relationObj[child];
    relationObj[parent] = { [child]: newChild };
  } else if (relationObj[parent]) {
    let innerObj = relationObj[parent];
    innerObj[child] = {};
  } else {
    function findParent(newTree, parentToFind, childToAdd) {
      if (Object.keys(relationObj).length != 0) {
        for (const ch in newTree) {
          if (ch == parentToFind) {
            let newChild = newTree[ch];
            newChild[childToAdd] = {};
            return;
          }
          let innerObj = newTree[ch];
          findParent(innerObj, parentToFind, childToAdd);
        }
      } else {
        relationObj[parent] = { [child]: {} };
      }
    }
    findParent(relationObj, parent, child);
  }
}

function printRelationObject(list) {
  for ([child, parent] of list) {
    fillObj([child, parent]);
  }
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

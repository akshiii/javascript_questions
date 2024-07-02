/**
Combination of a function bundled togethar with references to its surrounding state. In other words, a closure gives you access to an outer function scope from inner function
 */

function makeFunc() {
  var name = "Akshita";
  function displayName(num) {
    console.log(name, num);
  }
  return displayName;
}

let myFunc = makeFunc();
console.log(myFunc(5)); //Akshita 5

/*
Write a add Function which can take n no of parameters, and return the addition of all those n numbers
There has to be an extra () at the end of fucntion call
*/

function sum(num1) {
  return (num2) => {
    if (!num2) {
      return num1;
    } else {
      return sum(num1 + num2);
    }
  };
}
console.log(sum(1)(2)(3)());
console.log(sum(1)());
console.log(sum(1)(2)(3)(4)(6)());

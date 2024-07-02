/**
Convert a function f(a,b,c) into f(a)(b)(c) 
This must work with n no of arguments
*/

function curry(func) {
  return function curriedFunction(...args) {
    // ...args takes arguments in form of array [a,b,c]
    if (args.length >= func.length) {
      // check if current args passed equals the no of args function expects
      // .length is a property of a function object, and indicates how many arguments the function expects
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunction(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;
console.log(curry(sum)(1)(3)(5)(6));

/**
 * Curry function accepting 5 arguments
 * All calls must retrun same value
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));
console.log(sum(1)(2)(3, 4, 5));
console.log(sum(1)(2)(3, 4)(5));
console.log(sum(1)(2)(3)(4)(5)); 
 */

const ARGS_LENGTH = 5;

const sum = (...args) => {
  if (args.length === ARGS_LENGTH) {
    return args.reduce((initialVal, currVal) => initialVal + currVal, 0);
  } else {
    const recursiveFu = (...args2) => {
      args = args.concat(args2);
      if (args.length === ARGS_LENGTH)
        return args.reduce((initialVal, currVal) => initialVal + currVal, 0);
      else return recursiveFu;
    };
    return recursiveFu;
  }
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1)(2, 3, 4, 5));
console.log(sum(1)(2)(3, 4, 5));
console.log(sum(1)(2)(3, 4)(5));
console.log(sum(1)(2)(3)(4)(5)); // O/p should be same for all = 15

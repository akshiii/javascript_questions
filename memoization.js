function multiplyByTwo(num) {
  return num * 2;
}

function memoize(fn) {
  let data = {};
  return function (...args) {
    let context = this;
    let k = args.join(",");
    if (data[k]) {
      console.log("Getting from cache=");
      return data[k];
    } else {
      let result = fn.apply(context, args);
      let key = args.join(",");
      data[key] = result;
      return result;
    }
  };
}

let multiply = memoize(multiplyByTwo);
console.log(multiply(2));
console.log(multiply(4));
console.log(multiply(8));
console.log(multiply(2));

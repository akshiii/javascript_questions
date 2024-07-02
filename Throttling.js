/**
 * Throttling is a same concept like debouncing, but it says that we must wait uptill a certain period of fixed tiem(300 ms) to make another api call. It does not depends on user clicking.
 * Examples-
 * 1. A gun firing in a video game multiple times.
 * 2. resizing a browser window continously.
 */

let delay = 100;
const expensiveCall = () => {
  console.log("I am an expendsive API call");
};

const betterFunction = throttle(expensiveCall, delay);

window.addEventListener("resize", betterFunction);

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

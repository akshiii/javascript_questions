/**
 * Debouncing is a programming practise used to ensure that time consuming tasks do not fire so often that it stalls the performance of the web page.
 * It says that we must make a function call only if the time-difference between 2 key press events is greater than 300(for example) milliseconds
Debounce will send api calls only when user pauses while typing in input field for few seconds
 */
let counter = 0;
const getData = () => {
  console.log("Fetching Data...", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

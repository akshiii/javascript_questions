/**
 *
 * A curry function which returns sum of all previous arguments(return sum of previous values and current value)
 */

function currFu() {
  var result = 0;
  return (num2) => {
    if (!num2) {
      return result;
    } else {
      result = result + num2;
      return result;
    }
  };
}
const sum = currFu();
console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(4)); // 7

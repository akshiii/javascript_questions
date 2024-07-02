/**
 *
 * @param {*} num1
 * @returns
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
console.log(sum(1));
console.log(sum(2));
console.log(sum(4));

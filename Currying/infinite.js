//This solution doees not require an extra ()
function sum(num1) {
  setTimeout(() => {
    console.log("Over sum=", num1);
  }, 0);
  function sum2(num2) {
    num1 = num1 + num2;
    return sum2;
  }
  return sum2;
}

sum(1)(2)(3)(4);

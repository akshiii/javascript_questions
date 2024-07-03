/**
 * Replacing every Ruth's with "wow"
 */

const paragraph = "I think Ruth's dog is cuter than Ruth's dog and Ruth's!";

let abc = paragraph.replace(/Ruth's/g, (val) => {
  return "wow";
});

console.log(abc);

/**
 * Multiply each no of str with 2 and return the string in same format
 */

const str = `(1, 2, 3) , (4, 5, 6k) ,  (7, 8, 9)`;

const modifiedStr = str.replace(/\d+/g, (match) => {
  return Number(match) * 2;
});

console.log(modifiedStr);

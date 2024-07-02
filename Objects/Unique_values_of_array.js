let ar = [2, 2, 3, 4, 2, 2, 4, 4];
let temp = {};
ar.forEach((e) => {
  temp[e] = (temp[e] || 0) + 1;
});
console.log(Object.keys(temp));

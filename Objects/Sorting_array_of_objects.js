let arr = [
  { name: "Studio", planLevel: 2 },
  { name: "Enterprise", planLevel: 3 },
  { name: "free", planLevel: 1 },
  { name: "premium", planLevel: 4 },
];

//Sort an array of objects

let sortedArr = arr.sort((a, b) => {
  return a.planLevel - b.planLevel;
});

console.log(sortedArr);

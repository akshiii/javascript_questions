function flattenObject(input) {
  if (typeof input != "object" || input === null) return input;

  let flattened = {};

  for (const key in input) {
    const val = input[key];
    const flatVal = flattenObject(val);

    if (typeof flatVal === "object" && flatVal != null)
      flattened = { ...flattened, ...flatVal };
    else flattened[key] = flatVal;
  }

  return flattened;
}

let obj = {
  a: {
    b: {
      c: 3,
      4: 8,
    },
    k: 9,
    wow: "ok",
    o: {
      ok: "nope",
      k: null,
      ob: { q: { w: { end: 3 } } },
      w: undefined,
    },
  },
};

// Ans::
// let output = {
//   4: 8,
//   c: 3,
//   end: 3,
//   k: null,
//   ok: "nope",
//   w: undefined,
//   wow: "ok",
// };

console.log(obj);
console.log(flattenObject(obj));

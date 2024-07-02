let name = {
  firstname: "Akshita",
  lastname: "Tyagi",
};

let printFullName = function (hometown, state, country) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

let printMyName = printFullName.bind(name, "Jaipur", "RJ");
printMyName("India");

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printFullName.myBind(name, "cuttack", "Odisha");
printMyName2("India");

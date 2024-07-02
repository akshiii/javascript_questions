let name = {
  firstname: "Akshita",
  lastname: "Tyagi",
};

let name2 = {
  firstname: "Vishal",
  lastname: "Sharma",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

/**
 * Call borrows function from other scope and calls it by passing some other variables. Its called
 * fucntion borrowing. The first argument is the reference to this variable. Next we pass comma
 * separated arguments as much as we want.
 * First argument is always reference to this
 */
printFullName.call(name, "Jaipur", "RJ");

/**
 * Apply is also same as call but only differnce is we pass seconds arguments as ArrayList of arguments
 * First argument is always reference to this
 */

printFullName.apply(name, ["Jaipur", "RJ"]);

/**
 * Bind does not directly invoke the method, but gives you the copy of that method, which can be invoked later
 * First argument is always reference to this
 */

let printMyName = printFullName.bind(name, "Jaipur", "RJ");
printMyName();

"use strict";
/* 
1. this in global scope
*/
console.log("this in global scope= ", this);
/*this keyword in global space points to global object
(in case of browsers it is Window)
(in csae of nodejs it is global)
in case of mobile or smart watches it may be different
Basically Every JS runtime environment can have different value of "this"
*/

/* 
2. this in function scope
*/
function x() {
  console.log("this in fu scope= ", this);
}
x();
/**
in strict mode - this in function scope is window object
in non-strict mode - this in function scope is undefined
IMP!! - In a function the value of "this" is undefined, but because of a JS concept called "this substitution", it will be replaced by global object.
*/

/* 
3. this in strict mode - this substitution
"use strict";
Strict mode has some stricter rules than non-strict mode

If the value of this keyword is undefined or null, this keyword will be replaced with global object only in non-strict mode.
*/

/* 
4. this keyword value depends on how the function is called(window)
*/
x(); // undefined(in strict mode)
window.x(); // this keyword is now Window object (doesnt matter strict or non strict)

/* 
5. this inside a object's method
IMP- What is the difference between a function and a method?
Ans- If you will make a function as a part of an object then it is known as Method, like below x here is a Method now, of object obj
*/
const obj = {
  a: 10,
  x: function () {
    console.log(this); //Value of this here is obj
  },
};

obj.x(); // Value of this is obj

/* 
6. call, apply, bind ( sharing methods)
*/
/**
If we have another object obj1 who as has a property a: 20, now we have a way to share the x Method with both objects. 
We can do that using call,apply,bind
*/
const obj1 = {
  a: 20,
};

const Foo = function (a) {
  this.a = a;
  this.bar = function () {
    return a;
  };
  this.baz = function () {
    return a;
  };
};

Foo.prototype = {
  biz() {
    return this.a;
  },
};

const f = new Foo(7);

console.log(f.bar()); // ? 7
console.log(f.baz()); // ? 7
console.log(f.biz()); // ? 7

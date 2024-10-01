function resolveAfter5Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve("resolved");
    }, 5000);
  });
}

const fn = async () => {
  const data = resolveAfter5Seconds(); // 5 secs //
  console.log(6);
  const data2 = await resolveAfter5Seconds(); // 5 secs //
  console.log(5);
};

const fn1 = async () => {
  console.log(1);
  fn();
  console.log(3);
};

fn1();
//ans -  1  6  3 2 2 5
//

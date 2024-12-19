// IMP Lesson here: An async await block will only wait if it encounters anything worth waiting for, like a settimeout or fetch call etc. If await function does not have any JS which is asynchronous then it will act no wait for it.
// If it sees a console.log then it will not wait for it.
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

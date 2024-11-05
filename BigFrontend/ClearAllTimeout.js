const originalSetTimeout = window.setTimeout;
let timeoutIds = [];
window.setTimeout = (callback, delay) => {
  const timerId = originalSetTimeout(callback, delay);
  timeoutIds.push(timerId);
  return timerId;
};
const clearAllTimeout = () => {
  timeoutIds.forEach((id) => window.clearTimeout(id));
};

setTimeout(() => {
  console.log("ST 1");
}, 1000);

setTimeout(() => {
  console.log("ST 2");
}, 2000);
setTimeout(() => {
  console.log("ST 3");
}, 3000);
setTimeout(() => {
  console.log("ST 4");
}, 4000);

clearAllTimeout();

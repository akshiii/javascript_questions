/**
 *Cached Api call function
 cache refreshes/expires after a fixed time
 */
const cachedApiCall = (time) => {
  let cache = {};
  return async (url, config = {}) => {
    const key = `${url}${JSON.stringify(config)}`;

    const entry = cache[key];

    if (!entry || Date.now() > entry.expiry) {
      console.log("Making a fresh api call");
      try {
        let response = await fetch(url, config);
        let resp = await response.json();

        cache[key] = { value: resp, expiry: Date.now() + time };
      } catch (e) {
        console.log("Error while making api call", e);
      }
    }

    return cache[key].value;
  };
};

const call = cachedApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("1", a)
);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 800);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 1700);

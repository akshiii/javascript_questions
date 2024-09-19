(function (global) {
  if (!global.Promise) {
    function Promise(executor) {
      let state = "pending"; // 'fulfilled', 'rejected'
      let value = null;
      let handlers = [];
      let catches = [];

      function resolve(result) {
        if (state !== "pending") return;
        state = "fulfilled";
        value = result;
        handlers.forEach((h) => h(value));
      }

      function reject(error) {
        if (state !== "pending") return;
        state = "rejected";
        value = error;
        catches.forEach((c) => c(value));
      }

      this.then = function (callback) {
        if (state === "fulfilled") {
          callback(value);
        } else {
          handlers.push(callback);
        }
        return this;
      };

      this.catch = function (callback) {
        if (state === "rejected") {
          callback(value);
        } else {
          catches.push(callback);
        }
        return this;
      };

      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }

    global.Promise = Promise;
  }
})(this);

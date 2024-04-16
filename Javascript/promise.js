// using regular promise that resolves
const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data fetched...");
  }, 1000);
});

resolvePromise
  .then((data) => {
    console.log("promise resolved", data);
  })
  .catch((error) => {
    console.log("eror while resolving ");
  });

// using regular promise that rejects
const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("data fetching failed...");
  }, 2000);
});

rejectPromise
  .then((data) => {
    console.log("data fetching success", data);
  })
  .catch((error) => {
    console.log("error", error);
  });

// using promise methods

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise2");
  }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3");
  }, 5000);
});

const promises = [promise1, promise2, promise3];

// promise.all()
Promise.all(promises)
  .then((data) => {
    console.log("resolved promise", data);
  })
  .catch((error) => {
    console.log("rejected promise", error);
  })
  .finally(() => {
    console.log("promise.all");
  });

// promise.allSettled()
Promise.allSettled(promises)
  .then((data) => {
    console.log("resolved promises", data);
  })
  .catch((error) => {
    console.log("rejected promises", error);
  })
  .finally(() => {
    console.log("promise.allSettled");
  });

// promise.race()
Promise.race(promises)
  .then((data) => {
    console.log("resolved promise", data);
  })
  .catch((err) => {
    console.log("rejected promises", err);
  })
  .finally(() => {
    console.log("promise.race");
  });

// promise.any()
Promise.any(promises)
  .then((data) => {
    console.log("resolved promise", data);
  })
  .catch((error) => {
    console.log("rejected promise", error);
  })
  .finally(() => {
    console.log("promise.any");
  });

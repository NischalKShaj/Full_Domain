// using regular promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data fetched");
  }, 1000);
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// using promise methods
// ======= promise.all()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promsie 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise3 is rejected");
  }, 3000);
});

const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then((data) => {
    console.log("promises resolved", data);
  })
  .catch((error) => {
    console.log("rejected promise", error);
  });

// =====Promise.race()
Promise.race(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// ======Promise.allSettled()
Promise.allSettled(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// =======Promise.any()
Promise.any(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

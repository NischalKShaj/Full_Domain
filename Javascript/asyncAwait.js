// converting a resolved promise to async await
const resolvedPromise = async () => {
  try {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("data fetching successful");
      }, 2000);
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

resolvedPromise();

// converting a rejected promise to async await
const rejectPromise = async () => {
  try {
    const rej = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("data fetching failed");
      }, 1000);
    });
  } catch (error) {
    console.log("error:", error);
  }
};

rejectPromise();

// example of async await
const postLogin = async (req, res) => {
  const body = req.body;
  const userData = await userCollection({ email: body.email });
  res.status(200).json(userData);
};

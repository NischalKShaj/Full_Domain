// converting a resolved promise to async await
const resolvedPromise = async () => {
  try {
    const res = await new Promise((resolve, rejcet) => {
      setTimeout(() => {
        resolve("data fetched...");
      }, 1000);
    });
    console.log("resolved promise", res);
  } catch (error) {
    console.log("error", error);
  }
};

resolvedPromise();

// converting a rejected promise to async await
const rejectPromise = async () => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("data fetching failed...");
      }, 2000);
    });
  } catch (error) {
    console.log("error", error);
  }
};

rejectPromise();

// example of async await
const postlogin = async (req, res) => {
  const body = req.body;
  const userData = await usercollection({ email: body.email });
  res.status(200).json(userData);
};

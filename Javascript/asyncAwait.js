// converting a promise to async await
const test = async () => {
  try {
    const promise = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("data fetched....");
      }, 1000);
    });
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
};

test();

// example of async await
const postlogin = async (req, res) => {
  const body = req.body;
  const userData = await usercollection({ email: body.email });
  res.status(200).json(userData);
};

// file to show the querry and path params
const express = require("express");

const app = express();

const port = 3000;

// query params
const queryParams = (req, res) => {
  const id = req.query.id;
  if (id == 1) {
    res.send("user login");
  } else {
    res.send("invalid");
  }
};

// path params
const pathParams = (req, res) => {
  const uid = req.params.id;
  if (uid == 2) {
    res.send("admin login");
  } else {
    res.send("invalid");
  }
};

app.use("/id", queryParams);
app.use("/uid/:id", pathParams);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

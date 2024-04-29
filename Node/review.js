const express = require("express");
const app = express();

const query = (req, res) => {
  console.log(req.query.num1);
  const a = parseInt(req.query.num1.replace(/"/g, ""));
  const b = parseInt(req.query.num2.replace(/"/g, ""));
  const sum = a + b;

  res.send(sum.toString());
};

const port = 3000;

app.use("/add", query);

app.listen(port, () => {
  console.log("server connected");
});

// file to the working of the query params and path params

const express = require("express");
const app = express();

const port = 3000;

// sum using query params
const queryParams = (req, res) => {
  const num1 = parseInt(req.query.num1.replace(/"/g, ""));
  const num2 = parseInt(req.query.num2.replace(/"/g, ""));
  const sum = num1 + num2;
  res.send(sum.toString());
};

// checking odd or even using query params
const oddEven = (req, res) => {
  const number = parseInt(req.query.num.replace(/"/g, ""));
  if (number % 2 === 0) {
    res.send("even");
  } else {
    res.send("odd");
  }
};

// sum of 2numbers using path params
const pathParams = (req, res) => {
  const num1 = parseInt(req.params.num1.replace(/"/g, ""));
  const num2 = parseInt(req.params.num2.replace(/"/g, ""));
  const sum = num1 + num2;
  res.send(sum.toString());
};

// checking odd or even using path params
const check = (req, res) => {
  const num = parseInt(req.params.num.replace(/"/g, ""));
  if (num % 2 === 0) {
    res.send("even");
  } else {
    res.send("odd");
  }
};

app.get("/add", queryParams);
app.get("/check", oddEven);
app.get("/:num1/:num2", pathParams);
app.get("/:num", check);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

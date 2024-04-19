// file to show different types of middlewares
const morgan = require("morgan"); // third party middleware

// error handling middlewate
app.use((err, req, res, next) => {
  res.status(500).json(err);
  next();
});

// application middleware
const loggingDetail = (req, res, next) => {
  res.status(200).send("login success");
  next();
};

app.use(loggingDetail);

// routing middleware
router.get("/path", (req, res) => {
  res.render("newPage");
});

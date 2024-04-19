// file to show the server is created using http

const http = require("http");

const createServer = (req, res) => {
  res.write("hello");
  res.end();
};

const server = http.createServer(createServer);

const port = 3000;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
// content from the file fs.js// content from the file fs.js// content from the file fs.js// content from the file fs.js// content from the file fs.js
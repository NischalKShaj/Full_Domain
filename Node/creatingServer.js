// file to show the server is created using http

const http = require("http");

const creatingServer = (req, res) => {
  res.write("Hello");
  res.end();
};

const server = http.createServer(creatingServer);

const port = 3000;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
// this is written using the appendFile fs module// this is written using the appendFile fs module
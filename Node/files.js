// file to show the fs modules

const fs = require("fs");

// reading a file
fs.readFile("creatingServer.js", "utf-8", (err, data) => {
  console.log(data);
});

// writing a file
fs.writeFile(
  "createServer.js",
  "// content from the file fs.js",
  (err, data) => {
    console.log("writing the content to the file successfull");
  }
);

// appending a file
fs.appendFile(
  "creatingServer.js",
  "// content from the file fs.js",
  (err, data) => {
    console.log("file appending successfull");
  }
);

// unlink file
fs.unlink("test.txt", (err, data) => {
  console.log("file unlinked successfully");
});

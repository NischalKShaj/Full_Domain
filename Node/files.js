// file to show the fs modules

const fs = require("fs");

// reading a file
fs.readFile("createServer.js", "utf-8", (err, data) => {
  console.log(data);
});

// writing data on a file
fs.writeFile(
  "createServer.js",
  "//this is written using the writeFile fs module",
  (err, data) => {
    console.log(data);
  }
);

// for appending the data into another file
fs.appendFile(
  "creatingServer.js",
  "// this is written using the appendFile fs module",
  (err, data) => {
    console.log("file appended successfully");
  }
);

// for deleting the file
fs.unlink("test.txt", (err, data) => {
  console.log("file deleted successfully");
});

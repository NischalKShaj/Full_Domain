// file to show the working of the childProcess fork and spawn
const { fork, spawn, exec, execFile } = require("child_process");

// creating fork using the childprocess
const forking = fork("child.js");

forking.on("message", (message) => {
  console.log(message);
});

// creating spawn using childprocess
const node = "node";
const version = ["--version"];
const spawning = spawn(node, version);

spawning.stdout.on("data", (data) => {
  console.log(data.toString());
});

// creating an exec childprocess
exec("ls -l", (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  }
  if (stderr) {
    console.log(stderr);
  }
  console.log(stdout);
});

// creating an execFile childprocess
execFile("node", ["newFile.js"], (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  }
  if (stderr) {
    console.log(stderr);
  }
  console.log(stdout);
});

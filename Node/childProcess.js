// file to show the working of the childProcess fork and spawn
const { fork, spawn, execFile } = require("child_process");

// creating a fork
const childProcess = fork("child.js");

childProcess.on("message", (message) => {
  console.log("Received the message from the child.js");
});

// creating a spawn
const node = "node";
const version = ["--version"];

const nodeVersion = spawn(node, version);

nodeVersion.stdout.on("data", (data) => {
  console.log(`Version of node is ${data}`);
});

nodeVersion.stderr.on("error", (error) => {
  console.error("error occured", error);
});

nodeVersion.on("close", (code) => {
  console.log(`Process exited with ${code}code`);
});

// creating an execFile
execFile("node", ["newFile.js"], (error, stdout, stderr) => {
  if (error) {
    console.log("error occured", error);
  }
  if (stderr) {
    console.log("stderr", stderr);
  }
  console.log("stdout", stdout);
});

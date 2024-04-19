// file to show the working of the childProcess fork and spawn
const { fork, spawn, execFile, exec } = require("child_process");

// creating a fork
const childProcess = fork("child.js");

childProcess.on("message", (message) => {
  console.log("Received message from the parent", message);
});

// creating a spawn
const node = "node";
const version = ["--version"];

const nodeVersion = spawn(node, version);

nodeVersion.stdout.on("data", (data) => {
  console.log(`current version of node is ${data}`);
});

nodeVersion.stderr.on("error", (error) => {
  console.log("error occured: ", error);
});

nodeVersion.on("close", (code) => {
  console.log("process exited with code : ", code);
});

// creating execFile
execFile("node", ["newFile.js"], (error, stdout, stderr) => {
  if (error) {
    console.log("error occured : ", error);
  }
  if (stderr) {
    console.log("stderror :", stderr);
  }
  console.log("stdout : ", stdout);
});

// creating exec
exec("ls -l", (error, stdout, stderr) => {
  if (error) {
    console.log("error ocurred in the exec: ", error);
  }
  if (stderr) {
    console.log("stderr: ", stderr);
  }
  console.log("stdout: ", stdout);
});

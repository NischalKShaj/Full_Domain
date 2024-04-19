// file for sending message to the childProcess.js
const greet = (message) => {
  process.send(message);
};
greet("message to parent process");
console.log("successfully transfered");

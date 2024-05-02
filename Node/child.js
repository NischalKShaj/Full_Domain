// file for sending message to the childProcess.js
const greet = (message) => {
  process.send(message);
};

greet("hello this is my message");
console.log("data successfully transferred");

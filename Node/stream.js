// file to show different type sof stream

const fs = require("fs");
const { Duplex, Transform } = require("stream");

// readable stream
const readableStream = fs.createReadStream("testing.txt");

readableStream.on("data", (chunk) => {
  console.log("reading the data:", chunk.toString());
});

// writable stream
const writableStream = fs.createWriteStream("output.txt");

writableStream.write("This file is created using writable stream");
writableStream.end();

// creating a duplex
const duplex = new Duplex({
  write(chunk, encoding, callback) {
    console.log("received the chunk", chunk.toString());
    callback();
  },
  read(size) {},
});

duplex.write("Hello");
duplex.end();

// creating a transform stream
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

transformStream.write("Hello\n");
transformStream.end();
// takes the input and then it will be passed to the stream and processes
process.stdin.pipe(transformStream).pipe(process.stdout);

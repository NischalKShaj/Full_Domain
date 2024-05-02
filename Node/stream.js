// file to show different type sof stream

const fs = require("fs");
const { Duplex, Transform } = require("stream");

// readable stream
const readableStream = fs.createReadStream("testing.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

// writable stream
const writableStream = fs.createWriteStream("output.txt");

writableStream.write(
  "data from the stream.js using the method writable Stream"
);
writableStream.end();

// duplex stream
const duplex = new Duplex({
  write(chunk, encoding, callback) {
    console.log("duplex data : ", chunk.toString());
    callback();
  },
});

duplex.write("hello");
duplex.end();

// transform stream
const transform = new Transform({
  write(chunk, encoding, callback) {
    console.log("modified data : ", chunk.toString().toUpperCase());
    callback();
  },
  read(size) {},
});

transform.write("hello");
transform.end();

process.stdin.pipe(transform).pipe(process.stdout);

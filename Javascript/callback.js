// function to show the example of callback function

const calculate = (num1, num2, callback) => {
  const sum = num1 + num2;
  callback(num1, num2, sum);
};

const displaySum = (num1, num2, sum) => {
  console.log(`sum of ${num1} + ${num2} = ${sum}`);
};

const cal = calculate(2, 3, displaySum);

// example for callback hell
const readFile = (filename, callback) => {
  setTimeout(() => {
    const data = "Hello";
    callback(null, data);
    console.log("reading.....");
  }, 1000);
};

const appendFile = (data, callback) => {
  setTimeout(() => {
    const newData = data + " World";
    callback(null, newData);
    console.log("appending.....");
  }, 2000);
};

const logFile = (data, callback) => {
  setTimeout(() => {
    console.log(data);
    callback();
  }, 3000);
};

readFile("file.txt", (err, data1) => {
  if (err) {
    console.log("error while reading the file");
  } else {
    appendFile(data1, (err, data2) => {
      if (err) {
        console.log("error while appneding the file");
      } else {
        logFile(data2, (err) => {
          if (err) {
            console.log("error while logging the file");
          } else {
            console.log("file logged successfully");
          }
        });
      }
    });
  }
});

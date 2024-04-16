// filter for finding prime number

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const arr = [1, 2, 3, 4, 5];

const prime = arr.filter(isPrime);
console.log(prime);

// using filter for finding the odd number
const oddArr = arr.filter((value) => {
  if (value % 2 === 0) {
    return value;
  }
});
console.log(oddArr);

// for finding the student with mark greater than 50

const student = [
  { id: 1, name: "Alice", mark: 60 },
  { id: 2, name: "Bob", mark: 50 },
  { id: 3, name: "Charlie", mark: 89 },
  { id: 4, name: "Darwin", mark: 49 },
];

const pass = student.filter((student) => student.mark > 50);
const fail = student.filter((student) => student.mark <= 50);
console.log("passed", pass);
console.log("failed", fail);

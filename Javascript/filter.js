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

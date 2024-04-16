// using reduce function for finding the secondSmallest number

const arr = [1, 2, 3, 4, 5, 6];
const secondSmallest = arr.reduce(
  (prev, cur) => {
    if (cur < prev[0]) {
      return [cur, prev[0]];
    } else if (cur < prev[1]) {
      return [prev[0], cur];
    } else {
      return prev;
    }
  },
  [Infinity, Infinity]
)[1];
console.log(secondSmallest);

// using reduce function to find the second largest number
const secondLargest = arr.reduce(
  (prev, cur) => {
    if (cur > prev[0]) {
      return [cur, prev[0]];
    } else if (prev[1] > cur) {
      return [prev[0], cur];
    } else {
      return prev;
    }
  },
  [-Infinity, -Infinity]
)[1];
console.log(secondLargest);

// finding the sum of the arr
const sum = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log(sum);

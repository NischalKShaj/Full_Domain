// file to show the linear search

const linear = (value, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
};
const arr = [1, 2, 3, 4, 5];
const value = 2;
console.log(linear(value, arr));

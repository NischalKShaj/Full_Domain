// file to implement binary search

// without recursion
const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      end = mid - 1;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      console.log("search value not found");
    }
  }
};

const arr = [1, 2, 3, 4, 5];
const value = 3;
console.log(binarySearch(arr, value));

// with recurrsion
const binRecursion = (arr, value, start, end) => {
  if (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      return binRecursion(arr, value, start, mid - 1);
    } else if (arr[mid] < value) {
      return binRecursion(arr, value, mid + 1, end);
    } else {
      console.log("search value not found");
    }
  }
  return -1;
};

const newArr = [1, 2, 3, 4, 5];
const search = 4;
const start = 0;
const end = newArr.length - 1;
console.log(binRecursion(newArr, search, start, end));

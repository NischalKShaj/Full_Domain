// file to implement binary search

// without recursion
const binarySearch = (arr, value) => {
  if (arr.length <= 1) {
    return arr;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      end = mid - 1;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      console.log("value not found");
    }
  }
};

const arr = [1, 2, 3, 4, 5];
const value = 3;
console.log(binarySearch(arr, value));

// with recursion
const binRecursion = (arr, value, start, end) => {
  if (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      return binRecursion(arr, value, start, mid - 1);
    } else if (arr[mid] < value) {
      return binRecursion(arr, value, mid + 1, end);
    }
  }
  return -1;
};
const newArr = [1, 2, 3, 4, 5];
const search = 4;
const start = 0;
const end = newArr.length - 1;
console.log(binRecursion(newArr, search, start, end));

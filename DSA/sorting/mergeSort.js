// mergeSort

const merge = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return mergeSort(merge(left), merge(right));
};

const mergeSort = (left, right) => {
  let res = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const arr = [4, 6, 3, 8, 2, 9, 1];
console.log(merge(arr));

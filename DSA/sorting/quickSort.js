// quickSort

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let leftChild = [];
  let rightChild = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftChild.push(arr[i]);
    } else {
      rightChild.push(arr[j]);
    }
  }
  return [...quickSort(leftChild), pivot, ...quickSort(rightChild)];
};

const arr = [4, 6, 3, 8, 2, 9, 1];
console.log(quickSort(arr));

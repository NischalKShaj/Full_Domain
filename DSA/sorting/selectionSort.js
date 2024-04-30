// selectionSort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const arr = [4, 3, 6, 7, 2, 5, 1];
console.log(selectionSort(arr));

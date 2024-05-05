// for showing the array methods

const arr = [1, 2, 3, 4, 5];

// pop
const delVal = arr.pop();
console.log(delVal, arr);

// push
arr.push(5);
console.log(arr);

// shift
const del = arr.shift();
console.log(del, arr);

// unshift
arr.unshift(0);
console.log(arr);

// splice
arr.splice(2, 1, 5, 6, 7, 8, 9);
console.log(arr);

// flat
const arr2 = [1, 2, [3, 4], [5, [6, 7, 8]]];
const newArr = arr2.flat(2);
console.log(newArr);

// file for flattering array without using any inbuilt methods

const flatArray = (arr) => {
  let res = [];
  const helper = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  };
  helper(arr);
  return res;
};

const arr = [1, 2, 3, [4, 5, [7, 8, 9]], 20];
const flat = flatArray(arr);
console.log(flat);

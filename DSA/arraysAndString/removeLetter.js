// removing a letter from the given string

const remove = (str, word) => {
  //   let res = "";
  //   for (const char of str) {
  //     if (char !== word) {
  //       res += char;
  //     }
  //   }
  //   return res;
  let res = str.split("");
  for (let i = 0; i < res.length; i++) {
    if (res[i] === word) {
      res.splice(i, 1);
    }
  }
  return res.join("");
};
const str = "helloworld";
const rem = remove(str, "o");
console.log(rem);

// both methods are correct if any doubt
// uncomment the first part and comment the second part

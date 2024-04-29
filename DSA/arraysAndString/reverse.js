// reversing the string using recursion

const reverse = (str) => {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(-1)) + reverse(str.slice(0, -1));
};

const word = "hello";
const rev = reverse(word);
console.log(rev);

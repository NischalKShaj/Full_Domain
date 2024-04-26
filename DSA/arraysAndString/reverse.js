// reversing the string using recursion

const reverse = (word) => {
  if (word.length <= 1) {
    return word;
  }
  return word.slice(-1) + reverse(word.slice(0, -1));
};

const word = "hello";
const rev = reverse(word);
console.log(rev);

// reversing a string

const reverse = (word) => {
  let words = word.map((rev) => {
    return rev.split("").reverse().join("");
  });
  return words;
};

const word = ["Hello", "world"];
let reversed = reverse(word);
console.log(reversed);

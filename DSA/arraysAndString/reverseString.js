// reversing a string

let reverse = (word) => {
  let words = word.map((text) => {
    return text.split("").reverse().join("");
  });
  return words;
};

const word = ["Hello", "world"];
let reversed = reverse(word);
console.log(reversed);

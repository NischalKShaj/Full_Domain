// reversing using stack

const reverse = (word) => {
  let stack = [];
  for (const char of word) {
    stack.push(char);
  }
  let newArr = [];

  while (stack.length > 0) {
    let popped = stack.pop();
    newArr.push(popped);
  }
  return newArr.join("");
};

let word = "hello";
let rev = reverse(word);
console.log(rev);

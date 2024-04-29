// reversing using stack

const reverse = (word) => {
  let stack = [];
  for (const char of word) {
    stack.push(char);
  }
  let revArr = [];
  for (let i = 0; i < word.length; i++) {
    revArr.push(stack.pop());
  }
  // same thing with while loop
  // while (stack.length > 0) {
  //   revArr.push(stack.pop());    // remove the comments and comment the for loop and check the iteration //
  // }
  return revArr.join("");
};
let word = "hello";
let rev = reverse(word);
console.log(rev);

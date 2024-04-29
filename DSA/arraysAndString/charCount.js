// count the number of characters found on the string

const charCount = (str) => {
  const count = {};
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
};

const str = "helloworld";
const count = charCount(str);
console.log(count);

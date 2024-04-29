// find the palindrome of a string using recursion

const palindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return palindrome(str.slice(1, -1));
  } else {
    return false;
  }
};

const str = "malayalam";
const pali = palindrome(str);
console.log(pali);

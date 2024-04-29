// program to find the factorial of a number

const fact = (num) => {
  if (num <= 1) {
    return num;
  }
  return num * fact(num - 1);
};

const num = 3;
const factorial = fact(num);
console.log(factorial);

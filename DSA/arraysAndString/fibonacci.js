// program to find the fibonacci series using recursion

const fib = (num) => {
  if (num <= 1) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
};
const num = 3;
const fibonacci = fib(num);
console.log(fibonacci);

// file to show the example for function factory

const createCounter = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
  };
};

const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment());

// function factory is a hof that returns functions

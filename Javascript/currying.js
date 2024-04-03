// currying
const currying = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

const add = currying(1)(2)(3);
console.log(add);

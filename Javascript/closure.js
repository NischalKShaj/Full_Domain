// closure

const outer = () => {
  let val = "outer function";
  const inner = () => {
    console.log(val);
  };
  return inner;
};

const res = outer();
res();

// example of nested closure
const closure1 = () => {
  let a = 10;
  const closure2 = () => {
    let b = 20;
    const closure3 = () => {
      let sum = a + b;
      console.log(sum);
    };
    return closure3;
  };
  return closure2;
};

const nestedClosure = closure1();
let final = nestedClosure();
final();

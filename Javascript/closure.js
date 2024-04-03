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

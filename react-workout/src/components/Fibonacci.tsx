import React, { useMemo, useState } from "react";

const Fibonacci = () => {
  const [input, setInput] = useState("");
  const [fib, setFib] = useState(0);
  const fibonnaci = (num: number): number => {
    if (num <= 1) {
      return num;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  };

  const memorizedFib = useMemo(() => {
    return fibonnaci(parseInt(input));
  }, [input]);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFib = () => {
    setFib(memorizedFib);
  };

  return (
    <div>
      <input type="text" onChange={handelChange} />
      <button onClick={handleFib}>enter</button>
      <p>Fibonacci is {fib}</p>
    </div>
  );
};

export default Fibonacci;

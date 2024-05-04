// showing how to use useMemo()

import React, { useMemo, useState } from "react";

const Fibonacci = () => {
  const [fib, setFib] = useState(0);
  const [input, setInput] = useState("");

  const fibonacci = (num: number) => {
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

  const memorized = useMemo(() => {
    return fibonacci(parseInt(input));
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setFib(memorized);
    setInput("");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>calculate</button>
      <h3>{fib}</h3>
    </div>
  );
};

export default Fibonacci;

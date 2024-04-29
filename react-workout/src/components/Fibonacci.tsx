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

  const memorize = useMemo(() => {
    return fibonacci(parseInt(input));
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setFib(memorize);
    setInput("");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>find</button>
      <h3>{fib}</h3>
    </div>
  );
};

export default Fibonacci;

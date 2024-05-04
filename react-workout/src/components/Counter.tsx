// showing how to use the hook useState()

import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const increment = () => {
    setCounter(count + 1);
  };
  const decrement = () => {
    setCounter(count - 1);
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;

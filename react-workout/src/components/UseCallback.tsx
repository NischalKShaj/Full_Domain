// file to show the working of useCallback() hook

import { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleClick}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default UseCallback;

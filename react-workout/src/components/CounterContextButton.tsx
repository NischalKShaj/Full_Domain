// file to show the buttons for the CounterContext

import { useContext } from "react";
import { createCounterContext } from "../context/CounterContext";

const CounterContextButton = () => {
  const { increment, decrement } = useContext(createCounterContext);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CounterContextButton;

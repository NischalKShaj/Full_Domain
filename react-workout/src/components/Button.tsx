import { useContext } from "react";
import { CounterContext } from "../context/ContextProvider";

const Button = () => {
  const { increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Button;

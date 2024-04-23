import React, { useContext } from "react";
import { contextProvider } from "../context/ContextProvider";

const Button = () => {
  const { increment, decrement } = useContext(contextProvider);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Button;

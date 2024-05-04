// using the context created by the CounterContext

import { useContext } from "react";
import { createCounterContext } from "../context/CounterContext";

const ContextCount = () => {
  const { count } = useContext(createCounterContext);
  return (
    <div>
      <h4>{count}</h4>
    </div>
  );
};

export default ContextCount;

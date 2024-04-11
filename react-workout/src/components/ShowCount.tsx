import { useContext } from "react";
import { CounterContext } from "../context/ContextProvider";

const ShowCount = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  );
};

export default ShowCount;

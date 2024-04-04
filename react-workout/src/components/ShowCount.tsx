import { useContext } from "react";
import { CounterContext } from "../context/ContextProvider";

const ShowCount = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <p>Count:{count}</p>
    </div>
  );
};

export default ShowCount;

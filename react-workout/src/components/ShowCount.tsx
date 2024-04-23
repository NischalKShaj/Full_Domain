import { useContext } from "react";
import { contextProvider } from "../context/ContextProvider";

const ShowCount = () => {
  const { count } = useContext(contextProvider);
  return (
    <div>
      <h4>Count:{count}</h4>
    </div>
  );
};

export default ShowCount;

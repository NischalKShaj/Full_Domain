import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";

const ShowCounter = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <div>
      <h4>Count:{count}</h4>
    </div>
  );
};

export default ShowCounter;

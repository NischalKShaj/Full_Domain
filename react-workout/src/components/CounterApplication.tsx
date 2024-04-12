import React from "react";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../Redux/slice/newSlice";

const CounterApplication = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(incrementCount(1));
  };

  const handleDecrease = () => {
    dispatch(decrementCount(1));
  };

  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default CounterApplication;

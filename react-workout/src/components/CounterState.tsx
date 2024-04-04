// import React,  from 'react';
import { RootState } from "../Redux/store/store";
import { useSelector } from "react-redux";

const CounterState = () => {
  const { count } = useSelector((state: RootState) => state.count);
  return (
    <div>
      <p>Count:{count}</p>
    </div>
  );
};

export default CounterState;

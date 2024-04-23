import { useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/slice/counterSlice";

const CounterButton = () => {
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(increment(1));
  };
  const handleDec = () => {
    dispatch(decrement(1));
  };
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default CounterButton;

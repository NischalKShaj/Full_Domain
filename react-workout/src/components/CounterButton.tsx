import { useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/slice/counterSlice";

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
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button>
    </div>
  );
};

export default CounterButton;

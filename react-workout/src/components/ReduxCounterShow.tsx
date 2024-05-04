import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";
import { increment, decrement, reset } from "../Redux/slice/counter";

const ReduxCounterShow = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.count);

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>increment</button>
      <button onClick={handleReset}>increment</button>
    </div>
  );
};

export default ReduxCounterShow;

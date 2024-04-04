import { useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";

const CounterState = () => {
  const { count } = useSelector((state: RootState) => state.count);
  return (
    <div>
      <p>Count:{count}</p>
    </div>
  );
};

export default CounterState;

import { RootState } from "../Redux/store/store";
import { useSelector } from "react-redux";

const ShowCounter = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  return <div>{count}</div>;
};

export default ShowCounter;

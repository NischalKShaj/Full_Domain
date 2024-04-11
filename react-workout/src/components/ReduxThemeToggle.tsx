import { useDispatch } from "react-redux";
import { toggle } from "../Redux/slice/themeSlice";

const ReduxThemeToggle = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default ReduxThemeToggle;

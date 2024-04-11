import { useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/slice/themeSlice";

const ReduxThemeToggle = () => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleTheme());
  };
  return (
    <div>
      <button onClick={handleChange}>change Color</button>
    </div>
  );
};

export default ReduxThemeToggle;

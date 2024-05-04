// file to show the toggle function

import { useDispatch } from "react-redux";
import { toggle } from "../Redux/slice/themeSlice";
const ReduxToggle = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <div>
      <button onClick={handleClick}>Change theme</button>
    </div>
  );
};

export default ReduxToggle;

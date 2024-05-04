// file to show the text that undergoes the change

import { useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";

const ReduxTheme = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <div>
      <h3
        style={{
          color: theme === "light" ? "black" : "white",
          background: theme === "light" ? "white" : "black",
        }}
      >
        change the theme by clicking the button
      </h3>
    </div>
  );
};

export default ReduxTheme;

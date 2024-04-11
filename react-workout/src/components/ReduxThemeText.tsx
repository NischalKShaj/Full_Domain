import { useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";

const ReduxThemeText = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <div>
      <h2
        style={{
          color: theme === "light" ? "white" : "black",
          background: theme === "light" ? "black" : "white",
        }}
      >
        click the button to change the theme
      </h2>
    </div>
  );
};

export default ReduxThemeText;

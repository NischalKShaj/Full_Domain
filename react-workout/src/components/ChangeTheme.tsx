import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const ChangeTheme = () => {
  const { theme } = useContext(themeContext);
  return (
    <div>
      <h3
        style={{
          color: theme === "light" ? "black" : "white",
          background: theme === "dark" ? "black" : "white",
        }}
      >
        change theme
      </h3>
    </div>
  );
};

export default ChangeTheme;

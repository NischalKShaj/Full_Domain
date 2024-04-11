import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeText = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1
        style={{
          color: theme === "light" ? "white" : "black",
          background: theme === "light" ? "black" : "white",
        }}
      >
        Change the color of the text
      </h1>
    </div>
  );
};

export default ThemeText;

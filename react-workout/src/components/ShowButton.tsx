// file to toggle theme using theme context

import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const ShowButton = () => {
  const { toggle } = useContext(themeContext);
  return (
    <div>
      <button onClick={toggle}>change theme</button>
    </div>
  );
};

export default ShowButton;

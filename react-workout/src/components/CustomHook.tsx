import React, { useState } from "react";

const CustomHook = () => {
  const [curInput, setInput] = useState<string[]>([]);
  const [inputField, setInputField] = useState<string | never>("");

  const handleClick = () => {
    if (inputField.trim() !== "") {
      setInput([...curInput, inputField]);
      setInputField("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>add list</button>
      {curInput.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default CustomHook;

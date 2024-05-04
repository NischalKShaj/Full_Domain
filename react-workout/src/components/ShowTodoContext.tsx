// file to use the context for the show todo

import React, { useContext, useState } from "react";
import { todoContext } from "../context/TodoContext";

const ShowTodoContext = () => {
  const [input, setInput] = useState("");
  const { tasks, addTask } = useContext(todoContext);
  const handleClick = () => {
    addTask(input);
    setInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>add</button>
      {tasks.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </div>
  );
};

export default ShowTodoContext;

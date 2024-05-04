// file to show the implementation of todo application using useState

import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setTask([input, ...task]);
    setInput("");
  };

  const handleDelete = (index: number) => {
    const updatedTask = task.filter((value, i) => {
      return index !== i;
    });
    setTask(updatedTask);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>add</button>

      {task.map((tasks, i) => (
        <li key={i}>
          {tasks}
          <button onClick={() => handleDelete(i)}>remove</button>
        </li>
      ))}
    </div>
  );
};

export default Todo;

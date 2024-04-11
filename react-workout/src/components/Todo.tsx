import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTask] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setTask([input, ...tasks]);
    setInput("");
  };

  const handleDelete = (index: number) => {
    const updatedTasks = tasks.filter((value, i) => i !== index);
    setTask(updatedTasks);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={addTask}>enter</button>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => handleDelete(index)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default Todo;

import { useDispatch } from "react-redux";
import { addTask } from "../Redux/slice/taskSlice";
import React, { useState } from "react";

const AddTaskTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTask(input));
    setInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default AddTaskTodo;

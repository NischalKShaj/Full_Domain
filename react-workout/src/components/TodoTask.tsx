import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, deleteTasks } from "../Redux/slice/todoSlice";
import { RootState } from "../Redux/store/store";

const TodoTask = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    dispatch(addTasks(input));
    setInput("");
  };

  const deleteTask = (i: number) => {
    dispatch(deleteTasks(i));
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={input} />
      <button onClick={handleClick}>add</button>
      {tasks.map((task, i) => (
        <ul key={i}>
          <li>
            {task}
            <button onClick={() => deleteTask(i)}>delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoTask;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";
import { deleteTask } from "../Redux/slice/taskSlice";

const ShowTask = () => {
  const { task } = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    dispatch(deleteTask(index));
  };

  return (
    <div>
      {task.map((task, i) => (
        <li key={i}>
          {task} <button onClick={() => handleClick(i)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default ShowTask;

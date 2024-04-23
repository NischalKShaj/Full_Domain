import useCustomHook from "./CustomisedHook";

const ShowCustomHook = () => {
  const { count, increment, decrement, reset } = useCustomHook();
  return (
    <div>
      <h4>Count:{count}</h4>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ShowCustomHook;

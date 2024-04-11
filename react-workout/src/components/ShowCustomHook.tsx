import useCustomHook from "./CustomisedHook";

const ShowCustomHook = () => {
  const { count, increment, decrement, reset } = useCustomHook();
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>deccrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ShowCustomHook;

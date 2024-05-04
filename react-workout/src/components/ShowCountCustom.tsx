// file to show the state from the custom hook

import UseCounterUseReducer from "./UseCounterUseReducer";

const ShowCountCustom = () => {
  const { state, increment, decrement, reset } = UseCounterUseReducer();
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ShowCountCustom;

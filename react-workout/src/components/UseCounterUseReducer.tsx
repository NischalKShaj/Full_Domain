// demonstrating the use of custom hook and useReducer hook

import { useReducer } from "react";

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseCounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state: state.count,
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    reset: () => dispatch({ type: "reset" }),
  };
};

export default UseCounterUseReducer;

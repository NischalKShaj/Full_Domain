// import Counter from "./components/Counter";

// import { useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
// import { CounterContext } from "./context/ContextProvider";
// import ShowCount from "./components/ShowCount";
// import Button from "./components/Button";
import CounterState from "./components/CounterState";
// import Example from "./components/Example";
// import Fibonacci from "./components/Fibonacci";

const App = () => {
  return (
    <div>
      <CounterState />
      <CounterButton />
    </div>
  );
};

export default App;

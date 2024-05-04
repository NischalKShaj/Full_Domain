// file to show how to create a context

import { createContext } from "react";

interface CounterContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const createCounterContext = createContext<CounterContext>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

import { createContext } from "react";

interface CreateCounterContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CreateCounterContext>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

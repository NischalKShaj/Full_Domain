import { createContext } from "react";

interface CreateContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CreateContext>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

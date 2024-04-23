import { createContext } from "react";

interface CreateCounter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const contextProvider = createContext<CreateCounter>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

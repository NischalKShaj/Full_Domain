// file to create the context for changing theme

import { createContext } from "react";

interface ThemeContext {
  theme: string;
  toggle: () => void;
}

export const themeContext = createContext<ThemeContext>({
  theme: "light",
  toggle: () => {},
});

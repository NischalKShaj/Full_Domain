import { createContext } from "react";

interface CreateThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<CreateThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

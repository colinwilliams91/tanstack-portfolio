import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Theme, ThemeContextType } from "~/types/themes";
import { getClientThemeCookie } from "~/handlers/utils";

import { THEMES } from "~/constants/themes";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Middleware already set the cookie, just read it
  const [theme, setTheme] = useState<Theme>(getClientThemeCookie());

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEMES.ABYSS ? THEMES.WINTER : THEMES.ABYSS));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

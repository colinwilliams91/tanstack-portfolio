import { useTheme } from "~/providers/ThemeContext";
import { ThemeIcons } from "./ThemeIcons";
import { useMemo } from "react";

import { THEMES } from "~/constants/themes";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = useMemo(() => theme === THEMES.ABYSS, [theme]);

  return (
    <label className="swap swap-rotate hover:scale-115 hover:rotate-12 transition-transform duration-150">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="theme-controller"
      />
        <ThemeIcons />
    </label>
  );
}

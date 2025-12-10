import { useTheme } from "~/providers/ThemeContext";
import { SvgIcon } from "./SvgIcon";
import { useMemo } from "react";

import { THEMES } from "~/constants/themes";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = useMemo(() => theme === THEMES.ABYSS, [theme]);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="theme-controller"
      />
        <SvgIcon />
    </label>
  );
}

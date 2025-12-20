import { useTheme } from "~/providers/ThemeContext";
import { SvgIcon } from "./SvgIcon";
import { useMemo } from "react";

import { THEMES } from "~/constants/themes";
import { LABELS } from "~/constants/copy";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = useMemo(() => theme === THEMES.ABYSS, [theme]);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={isDark ? LABELS.THEME_TOGGLE.SWITCH_TO_LIGHT : LABELS.THEME_TOGGLE.SWITCH_TO_DARK}
        className="theme-controller"
      />
        <SvgIcon />
    </label>
  );
}

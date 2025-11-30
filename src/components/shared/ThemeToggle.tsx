import { useTheme } from "~/providers/ThemeContext";
import { SvgIcon } from "./SvgIcon";
import { useMemo } from "react";

import { ICON_PATHS } from "~/constants/svg-icons";
import { THEMES } from "~/constants/themes";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  console.log("Current theme in ThemeToggle:", theme);
  const isDark = useMemo(() => theme === THEMES.ABYSS, [theme]);
  console.log("isDark value in ThemeToggle:", isDark);

  return (
    <label className="swap swap-rotate btn btn-ghost">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="hidden"
      />
      {isDark ? (
        <SvgIcon pathVal={ICON_PATHS.MOON} />
      ) : (
        <SvgIcon pathVal={ICON_PATHS.SUN} />
      )}
    </label>
  );
}

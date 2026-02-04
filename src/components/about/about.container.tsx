import { THEMES } from "~/constants/themes";
import { useTheme } from "~/providers/ThemeContext";
import { AboutPresenter } from "./about.presenter";


export function AboutPageContainer() {
  const theme = useTheme().theme;
  const firstLetter = theme === THEMES.WINTER ? "🖋️" : "🍃";
  return (
    <AboutPresenter theme={theme} firstLetter={firstLetter} />
  );
}
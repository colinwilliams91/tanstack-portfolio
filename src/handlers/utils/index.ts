import { ICON_PATHS } from "~/constants/svg-icons";
import { THEMES } from "~/constants/themes";
import { Theme } from "~/types/themes";

/////////////////////
//#region STYLES ////
/////////////////////

export function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(THEMES.KEY);
    if (stored === THEMES.WINTER || stored === THEMES.ABYSS) {
      return stored;
    }
  }
  return THEMES.ABYSS;
}

export const getSwapClassFromSvgPath = (pathVal: string): string => {
    switch (pathVal) {
        case ICON_PATHS.MOON:
            return "on";
        case ICON_PATHS.SUN:
            return "off";
        default:
            return "off";
    }
};

/////////////////////
//#endregion ////////
/////////////////////
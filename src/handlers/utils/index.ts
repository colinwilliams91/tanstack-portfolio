import { setCookie } from "@tanstack/react-start/server";
import { createServerOnlyFn } from "@tanstack/react-start";
import { Theme } from "~/types/themes";

import { ICON_PATHS } from "~/constants/svg-icons";
import { THEMES } from "~/constants/themes";

/////////////////////
//#region STYLES ////
/////////////////////

// Client-side cookie reader (fallback only - middleware handles the real work)
export const getClientThemeCookie = (): Theme => {
  if (typeof document === 'undefined') return THEMES.ABYSS;

  const cookies = document.cookie.split('; ');
  const themeCookie = cookies.find(c => c.startsWith(`${THEMES.KEY}=`));
  const theme = themeCookie?.split('=')[1];

  if (theme === THEMES.WINTER || theme === THEMES.ABYSS) {
    return theme;
  }
  return THEMES.ABYSS;
}

export const setThemeCookie = createServerOnlyFn(
  (theme: Theme) => {
    setCookie(
      THEMES.KEY,
      theme,
      { path: "/", maxAge: 60 * 60 * 24 * 30 } // Example: 30 days
    );
  }
);

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
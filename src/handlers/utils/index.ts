import { setCookie } from "@tanstack/react-start/server";
import { createServerOnlyFn } from "@tanstack/react-start";
import { Theme } from "~/types/themes";

import { ICON_PATHS } from "~/constants/icons/svg-icons";
import { THEMES } from "~/constants/themes";
import { COOKIES } from "~/constants/cookies";

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
      { path: "/", maxAge: COOKIES.AGE.MONTH }
    );
  }
);

/////////////////////
//#endregion ////////
/////////////////////

/////////////////////
//#region MATH //////
/////////////////////

export const formatDataSize = (sizeInKb: number): string => {
  if (sizeInKb < 1024) {
    return `${sizeInKb} KB`;
  } else {
    const sizeInMb = (sizeInKb / 1024).toFixed(2);
    return `${sizeInMb} MB`;
  }
};

export const formatDateRelative = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  if (diffInDays < 1) {
    return "Today";
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else {
    return `${diffInDays} days ago`;
  }
};

export const getMostRecentDate = (dates: (string | null)[]): string => {
  if (dates.length === 0)
    return "";

  const validDates = dates
    .filter((date): date is string => date !== null);

  if (validDates.length === 0)
    return "";

  return validDates
    .reduce((acc, cur) => new Date(acc) > new Date(cur)
      ? acc.slice(0, 10)
      : cur.slice(0, 10));
};

/////////////////////
//#endregion ////////
/////////////////////

/////////////////////
//#region PROJECTS //
/////////////////////

export const truncateDescription = (description: string | null, maxLength: number = 100): string =>
  !description?.length
    ? "No description available"
    : description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;

/////////////////////
//#endregion ////////
/////////////////////
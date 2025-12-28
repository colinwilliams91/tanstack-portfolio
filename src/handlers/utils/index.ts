import { setCookie } from "@tanstack/react-start/server";
import { createServerOnlyFn } from "@tanstack/react-start";
import { Theme } from "~/types/themes";

import { THEMES } from "~/constants/themes";
import { COOKIES } from "~/constants/cookies";
import { CAREER_EVENTS } from "~/constants/events/career-events";
import { IconName } from "~/components/shared/abstract";

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

export const getYoeFromDate = (startDate: Date = CAREER_EVENTS.START, roundUp: boolean = false): { years: number, months: number } => {
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  return roundUp ? {
    years: months > 0 ? years + 1 : years,
    months: 0
  } : {
    years: years,
    months: months
  }
};

// Format battery level to percentage
export const getBatteryPercentage = (batteryLevel: number | null): number | null => batteryLevel !== null ? Math.round(batteryLevel * 100) : null;

export const getBatteryLevelIcon = (percentage: number): IconName => {
  let iconName: IconName = "battery";
  if (percentage === 100) iconName = "battery-full";
  if (percentage >= 75 && percentage < 100) iconName = "battery-three";
  if (percentage >= 50 && percentage < 75) iconName = "battery-two";
  if (percentage >= 10 && percentage < 50) iconName = "battery-one";
  return iconName;
};

// Get effective connection type display name
export const getConnectionTypeName = (network: { online: boolean; type?: string; effectiveType?: string }) => {
  if (!network.online) return "Offline";
  if (network.type) {
    return network.type.charAt(0).toUpperCase() + network.type.slice(1);
  }
  if (network.effectiveType) {
    return network.effectiveType.toUpperCase();
  }
  return "Online";
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
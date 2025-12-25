import { Theme } from "~/types/themes";

export const THEMES = {
  KEY: "theme",
  WINTER: "winter" satisfies Theme,
  ABYSS: "abyss" satisfies Theme,
} as const;

export const TEXT_ROTATE_DURATIONS = [
  "duration-9000",
  "duration-10000",
  "duration-11000",
  "duration-12000",
  "duration-13000",
  "duration-14000",
] as const;

// export const TECH_CELL_COLORS = [
//   "bg-gradient-to-br from-blue-100 to-orange-600",
//   "bg-gradient-to-br from-blue-100 to-purple-600",
//   "bg-gradient-to-br from-purple-100 to-blue-600",
//   "bg-gradient-to-br from-purple-100 to-orange-600",
//   "bg-gradient-to-br from-orange-100 to-blue-600",
//   "bg-gradient-to-br from-orange-100 to-purple-600",
// ] as const;

// export const TECH_CELL_COLORS = [
//   "bg-gradient-to-tl from-info/10 via-base-100/30 to-info/30",
//   "bg-gradient-to-tl from-info/10 via-base-100/30 to-info/30",
//   "bg-gradient-to-bl from-info/10 via-base-100/30 to-info/30",
//   "bg-gradient-to-bl from-info/10 via-base-100/30 to-info/30",
//   "bg-gradient-to-tl from-info/10 via-base-100/30 to-info/30",
//   "bg-gradient-to-tl from-info/10 via-base-100/30 to-info/30",
// ] as const;

export const TECH_CELL_COLORS = [
  "bg-info/50",
  "bg-info/40",
  "bg-info/40",
  "bg-info/30",
  "bg-info/20",
  "bg-info/10",
] as const;

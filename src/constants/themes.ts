import { Theme } from "~/types/themes";

export const THEMES = {
  KEY: "theme",
  WINTER: "winter" satisfies Theme,
  ABYSS: "abyss" satisfies Theme,
} as const;

export const TEXT_ROTATE_DURATIONS = ["duration-9000", "duration-10000", "duration-11000", "duration-12000", "duration-13000", "duration-14000"] as const;

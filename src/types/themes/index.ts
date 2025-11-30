export type Theme = "winter" | "abyss";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

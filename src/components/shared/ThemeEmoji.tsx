import { THEMES } from "~/constants/themes";

interface ThemeEmojiProps {
  theme: string;
}

export function ThemeEmoji({ theme }: ThemeEmojiProps) {
  return (
    <span className="relative inline-block text-5xl w-12 h-12">
      <span className={`absolute inset-0 transition-all duration-300 ${theme === THEMES.WINTER ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-30 -rotate-45'}`}>
        ✒️
      </span>
      <span className={`absolute inset-0 transition-all duration-300 ${theme === THEMES.WINTER ? 'opacity-0 scale-30 rotate-45' : 'opacity-100 scale-100 rotate-0'}`}>
        🍃
      </span>
    </span>
  );
}

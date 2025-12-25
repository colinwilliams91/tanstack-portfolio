import { createFileRoute } from "@tanstack/react-router";
import friends from "~/assets/headshots/colin_and_evan_you.webp";
import { TechnologiesContainerList } from "~/components/about/list/technologies.container";
import { THEMES } from "~/constants/themes";
import { useTheme } from "~/providers/ThemeContext";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  const theme = useTheme().theme;
  const firstLetter = theme === THEMES.WINTER ? "🖋️" : "🍃";
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      {/* Headshot Image with transition */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start md:mt-14">
        <div className="avatar">
          <div className="ring-accent ring-offset-current/75 shadow-2xl drop-shadow-2xl ring-offset-6 rounded-tl-full rounded-b-full animate-fade-in">
            <img
              src={friends}
              alt="Colin Williams and Evan You"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose max-w-none flex-1 text-current">
        <h1>About</h1>
        <p className="first-letter:translate-x-0.5 first-letter:text-7xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
          {firstLetter}I'm Colin. Occasionally I enjoy karaoke with the creator of Vue.js, Evan You,
          and when I'm not doing that I'm contributing to open source projects like <a href="https://github.com/dotnet/aspire/pull/8259" target="_blank" rel="noopener noreferrer">Microsoft Aspire v13</a>
        </p>
        <h2>Technical Expertise</h2>
        <TechnologiesContainerList />
      </div>
    </div>
  );
}

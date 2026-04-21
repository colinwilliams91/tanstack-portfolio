import { TechnologiesContainerList } from "./list/technologies.container";
import friends from "~/assets/headshots/colin_and_evan_you.webp";
import { AboutPresenterProps } from "./abstract";
import { API_URLS } from "~/constants/public-api-urls";
import { ThemeEmoji } from "~/components/shared/ThemeEmoji";

export const AboutPresenter = ({ theme, firstLetter }: AboutPresenterProps) => {
  /* firstLetter is currently unused as it was under construction and deemed temporarily undesirable */
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      {/* Headshot Image with transition */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start md:mt-14">
        <div className="avatar">
          <div className="ring-4 ring-accent theme-winter:ring-primary-content/45 ring-offset-current/75
            ring-offset-6 theme-winter:ring-offset-8 rounded-tl-full rounded-b-full animate-fade-in shadow-2xl drop-shadow-2xl">
            <img
              src={friends}
              alt="Colin Williams and Evan You"
            />
          </div>
        </div>
      </div>

      {/* Content UNDO STEP FOR ANIMATE FIRST LETTER!!!!!*/}
      <div className="prose max-w-none flex-1 text-current">
        <div className="flex items-center gap-3">
          <h1 className="mb-0">About</h1>
          <ThemeEmoji theme={theme} />
        </div>
        <p>
          I'm Colin. Occasionally I enjoy karaoke with the creator of Vue.js, Evan You,
          and when I'm not doing that I'm contributing to open source projects like <a href={API_URLS.OSS.MICROSOFT_ASPIRE} target="_blank" rel="noopener noreferrer">Microsoft Aspire v13</a>
        </p>
        <h2>Technical Expertise</h2>
        <TechnologiesContainerList />
      </div>
    </div>
    );
}
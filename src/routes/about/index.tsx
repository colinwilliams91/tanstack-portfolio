import { createFileRoute } from "@tanstack/react-router";
import friends from "~/assets/headshots/colin_and_evan_you.jpeg";
import { LABELS } from "~/constants/copy";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Headshot Image with transition */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start md:pt-10 lg:pt-0">
        <div className="avatar">
          <div className="mask mask-squircle animate-fade-in">
            <img
              src={friends}
              alt={LABELS.IMAGES.ABOUT_PHOTO}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose max-w-none flex-1">
        <h1>About</h1>
        <p>
          I'm Colin. Occasionally I enjoy karaoke with the creator of Vue.js, Evan You,
          and when I'm not doing that I'm contributing to open source projects like <a href="https://github.com/dotnet/aspire/pull/8259" target="_blank" rel="noopener noreferrer">Microsoft Aspire v13</a>
        </p>
        <h2>Technologies</h2>
        <ul>
          <li>TanStack Start - Full-stack framework</li>
          <li>TanStack Router - Type-safe routing</li>
          <li>TanStack Query - Data fetching with caching</li>
          <li>DaisyUI - Minimal styling</li>
          <li>TypeScript - Type safety</li>
          <li>Vite - Build tool</li>
        </ul>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import friends from "~/assets/headshots/colin_and_evan_you.jpeg";

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
              alt="Colin Williams and Evan You"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose max-w-none flex-1">
        <h1>About</h1>
        <p>
          This portfolio demonstrates a clean, minimalistic approach to building
          web applications using the TanStack ecosystem.
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

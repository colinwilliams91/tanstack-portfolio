import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Headshot Image with transition */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <div className="avatar">
          <div className="w-48 md:w-64 rounded-xl mask mask-squircle animate-fade-in">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='120' fill='white' font-weight='bold'%3ECW%3C/text%3E%3C/svg%3E"
              alt="Colin Williams headshot"
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

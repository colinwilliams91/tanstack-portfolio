import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="prose max-w-none">
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
  );
}

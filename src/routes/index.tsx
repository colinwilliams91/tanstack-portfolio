import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="hero min-h-[60vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="py-6">
            A minimal portfolio built with TanStack Start, TanStack Router, and
            TanStack Query.
          </p>
        </div>
      </div>
    </div>
  );
}

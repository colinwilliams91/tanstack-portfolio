import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

export function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(
    import.meta.env.DEV
  );

  const errorMessage =
    error instanceof Error ? error.message : "An unexpected error occurred";
  const errorStack = error instanceof Error ? error.stack : undefined;

  const handleReset = () => {
    reset();
    router.invalidate();
  };

  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="card bg-base-200 w-full max-w-lg shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-error"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h2 className="card-title text-error">Something went wrong</h2>
          </div>

          <p className="py-2">{errorMessage}</p>

          <div className="flex flex-wrap gap-2">
            <button className="btn btn-primary btn-sm" onClick={handleReset}>
              Try again
            </button>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setShowDetails((prev) => !prev)}
            >
              {showDetails ? "Hide details" : "Show details"}
            </button>
          </div>

          {showDetails && errorStack && (
            <div className="mt-4">
              <pre className="max-h-48 overflow-auto rounded bg-base-300 p-3 text-xs">
                <code>{errorStack}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

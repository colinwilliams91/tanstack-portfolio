import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Icon } from "../Icon";

export function ErrorLogComponent({ error, reset }: ErrorComponentProps) {
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
            <Icon name="error" className="h-6 w-6 text-error" />
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

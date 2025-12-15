import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="card bg-base-200 w-full max-w-lg shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-warning"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="card-title text-warning">Page Not Found</h2>
          </div>

          <p className="py-2">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <div className="card-actions">
            <Link to="/" className="btn btn-primary btn-sm">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

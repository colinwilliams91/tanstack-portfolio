import { Link } from "@tanstack/react-router";
import { Icon } from "../Icon";

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="card bg-base-200 w-full max-w-lg shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <Icon name="warning" className="h-6 w-6 text-error" />
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

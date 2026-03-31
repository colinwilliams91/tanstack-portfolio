import { Link } from "@tanstack/react-router";

export function WhoamiLink({ animationDelay = "1.0s" }: { animationDelay?: string }) {
  return (
    <div
      className="opacity-0 animate-fade-in"
      style={{ animationDelay, animationFillMode: "forwards" }}
    >
      <Link
        to="/whoami"
        className="whoami-link"
        aria-label="whoami - personal interests and writings"
      >
        whoami<span className="whoami-underscore">_</span>
      </Link>
    </div>
  );
}

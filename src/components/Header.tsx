import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="navbar bg-base-200 px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Portfolio
        </Link>
      </div>
      <nav className="flex gap-4">
        <Link
          to="/"
          className="link link-hover"
          activeProps={{ className: "link-primary font-semibold" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="link link-hover"
          activeProps={{ className: "link-primary font-semibold" }}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="link link-hover"
          activeProps={{ className: "link-primary font-semibold" }}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}

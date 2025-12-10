import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="navbar bg-base-200 px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Portfolio
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link
          to="/"
          className="nav-link"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="nav-link"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          Projects
        </Link>
        <Link
          to="/blogs"
          className="nav-link"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          Blogs
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

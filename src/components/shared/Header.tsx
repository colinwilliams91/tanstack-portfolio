import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="navbar bg-base-200 px-2 sm:px-4 min-h-16">
      <div className="flex-1">
        <Link to="/" className="text-lg sm:text-xl font-bold">
          Colin Williams
        </Link>
      </div>
      {/* Desktop navigation - hidden on mobile */}
      <nav className="hidden md:flex items-center gap-4">
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
      {/* Mobile navigation - visible only on mobile */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className="nav-link"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="nav-link"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="nav-link"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

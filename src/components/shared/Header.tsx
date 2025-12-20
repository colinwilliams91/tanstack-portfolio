import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import { Menu } from "./Menu";
import { LABELS } from "~/constants/copy";

export function Header() {
  return (
    <header className="navbar bg-base-200 px-2 sm:px-4 min-h-16">
      <div className="flex-1">
        <Link to="/" className="text-lg sm:text-xl font-bold" aria-label={LABELS.NAVIGATION.HOME}>
          Colin Williams
        </Link>
      </div>
      {/* Desktop navigation - hidden on mobile */}
      <nav className="hidden md:flex items-center gap-4" aria-label={LABELS.NAVIGATION.MAIN_NAV}>
        <SearchBar />
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
        <SearchBar />
        <ThemeToggle />
        <Menu />
      </div>
    </header>
  );
}

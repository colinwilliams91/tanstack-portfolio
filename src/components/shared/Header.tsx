import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import { Menu } from "./Menu";
import { getYoeFromDate } from "~/handlers/utils";
import { COPY } from "~/constants/copy";

export function Header() {
  return (
    <header className="navbar bg-base-200/90 px-2 sm:px-4 min-h-16 sticky top-0 z-50">
      <div className="flex-1 flex items-center gap-3">
        <Link to="/" className="text-lg sm:text-xl font-bold text-shadow-2xl">
          Colin Williams
        </Link>
        <div className="text-xs opacity-50 pt-1.5">
          {COPY.HEADER.PROFESSIONAL_EXP}
        </div>
      </div>
      {/* Desktop navigation - hidden on mobile */}
      <nav className="hidden md:flex items-center gap-4">
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

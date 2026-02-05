import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./themes/ThemeToggle";
import { SearchBar } from "./SearchBar";
import { Menu } from "./Menu";
import { COPY } from "~/constants/copy";
import { useVibrate } from "~/hooks/useVibrate";
import { Icon } from "./Icon";

export function Header() {
  const vibrate = useVibrate();
  return (
    <header className="navbar bg-base-200/90 px-2 sm:px-4 min-h-16 sticky top-0 z-50">
      <div className="flex-1 flex items-center gap-3">
        <Link to="/" className="text-lg sm:text-xl sm:ml-0 ml-2.5 font-bold text-shadow-2xl">
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
          aria-label="home"
          to="/"
          onClick={() => vibrate()}
          className="nav-button"
          data-tip="home"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          <Icon name={"home"} className="w-6 h-6 fill-current" stroke="currentColor" fill="none" aria-hidden="true" />
        </Link>
        <Link
          aria-label="about"
          to="/about"
          onClick={() => vibrate()}
          className="nav-button"
          data-tip="about"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          <Icon name={"about"} className="w-6 h-6 fill-current" stroke="currentColor" fill="none" aria-hidden="true" />
        </Link>
        <Link
          aria-label="projects"
          to="/projects"
          onClick={() => vibrate()}
          className="nav-button"
          data-tip="projects"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          <Icon name={"projects"} className="w-7 h-7 fill-current" stroke="currentColor" fill="none" aria-hidden="true" />
        </Link>
        <Link
          aria-label="blogs"
          to="/blogs"
          onClick={() => vibrate()}
          className="nav-button"
          data-tip="blogs"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          <Icon name={"blogs"} className="w-6 h-6 fill-current" stroke="currentColor" fill="none" aria-hidden="true" />
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

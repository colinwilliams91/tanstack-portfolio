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
          className="relative transition-all duration-300 hover:scale-105 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="relative transition-all duration-300 hover:scale-105 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="relative transition-all duration-300 hover:scale-105 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          Projects
        </Link>
        <Link
          to="/blogs"
          className="relative transition-all duration-300 hover:scale-105 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          activeProps={{ className: "text-primary font-semibold" }}
        >
          Blogs
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

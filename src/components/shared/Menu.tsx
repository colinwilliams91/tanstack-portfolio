import { Link } from "@tanstack/react-router";
import { ICON_PATHS } from "~/constants/icons/svg-icons";


export function Menu() {
    return (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns={ICON_PATHS.W3}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={ICON_PATHS.MENU}
              />
            </svg>
          </div>
          <ul
            className="menu menu-sm dropdown-content bg-base-100/50 border border-base-300/50 backdrop-blur-sm rounded-box z-1 mt-3 w-52 p-2 shadow-sm"
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
    )
};

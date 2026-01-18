import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";


export function Menu() {
    return (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Icon name="menu" className="h-6 w-6" stroke="currentColor" fill="none" />
          </div>
          <ul
            className="menu menu-sm dropdown-content glass bg-base-200 rounded-xl z-1 mt-4.5 w-52 p-2 shadow-2xl"
          >
            <li>
              <Link
                to="/"
                className="nav-link text-base-content border border-x-0 border-t-0 text-shadow-xs m-0.5"
                activeProps={{ className: "text-primary font-semibold scale-99" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link text-base-content border border-x-0 border-t-0 text-shadow-xs m-0.5"
                activeProps={{ className: "text-primary font-semibold scale-99" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="nav-link text-base-content border border-x-0 border-t-0 text-shadow-xs m-0.5"
                activeProps={{ className: "text-primary font-semibold scale-99" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="nav-link text-base-content border border-x-0 border-t-0 text-shadow-xs m-0.5"
                activeProps={{ className: "text-primary font-semibold scale-99" }}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
    )
};

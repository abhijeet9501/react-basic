import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Add</Link>
              </li>
              <li>
                <Link to="/view">View</Link>
              </li>
              <li>
                <Link to="/edit">Edit</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            ToDo
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-purple-500" : ""
                }
              >
                Add
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/view"
                className={({ isActive }) =>
                  isActive ? "font-bold text-purple-500" : ""
                }
              >
                View
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/edit"
                className={({ isActive }) =>
                  isActive ? "font-bold text-purple-500" : ""
                }
              >
                Edit
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;

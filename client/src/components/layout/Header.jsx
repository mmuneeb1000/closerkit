import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Pitches",
      path: "/pitches",
    },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-2xl font-bold text-primary">
          CloserKit
        </NavLink>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "text-muted hover:text-primary"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-text">{user.name}</span>

              <button
                onClick={logout}
                className="rounded-lg border border-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-lg bg-neutral-800 px-4 py-2 text-white transition hover:bg-neutral-600"
              >
                Get Started
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

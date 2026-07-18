import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Pitches", path: "/pitches" },
  ];

  const linkClass = ({ isActive }) =>
    `transition text-neutral-900 border-b-2 hover:text-green-800 py-2  ${
      isActive
        ? "hover:text-green-800 font-semibold border-green-600"
        : "border-white hover:border-green-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NavLink to="/" className="flex flex-wrap items-center gap-3 ">
          <div className="rounded-lg bg-green-600 p-2 text-white">
            <RiRobot2Line size={20} />
          </div>

          <span className="text-2xl font-bold text-text">CloserKit</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex ">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-3 md:flex">
          {user ? (
            <>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-neutral-900">
                  <FiUser />
                </div>

                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                </div>
              </div>

              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100 "
              >
                <FiLogOut />
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-lg px-4 py-2 border border-neutral-900 hover:bg-gray-100"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-lg bg-green-600 border border-green-600 px-5 py-2 text-white hover:bg-green-800"
              >
                Get Started
              </NavLink>
            </>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col p-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 ${
                    isActive
                      ? "bg-green-50 text-neutral-900 font-semibold"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-6 border-t pt-6">
              {user ? (
                <>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-neutral-900">
                      <FiUser />
                    </div>

                    <span>{user.name}</span>
                  </div>

                  <button
                    onClick={logout}
                    className="w-full rounded-lg border py-3"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-y-3">
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg border py-3 text-center"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg bg-green-600 py-3 text-center text-white"
                  >
                    Create Account
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

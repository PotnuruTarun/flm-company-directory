import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Companies from "./pages/Companies";

function App() {
  const [theme, setTheme] = useState("light");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const location = useLocation();
  const showHeader = location.pathname !== "/"; // hide header on landing

  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && (
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-3 bg-[var(--nav-bg)] border-b border-[var(--border)]">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="flex items-center gap-1 text-[var(--text)] no-underline font-bold text-lg"
              end
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-[var(--accent)] text-white shadow-md">
                T
              </span>
              CD
            </NavLink>
          </div>

          {/* Mobile theme toggle */}
          <button
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--input-bg)] text-[var(--text)] font-semibold cursor-pointer transition-all"
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          >
            {theme === "dark" ? "🌙" : "🌞"}
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
          </button>

          {/* Menu button for mobile */}
          <button
            className="md:hidden flex items-center justify-center px-3 py-2 rounded-xl bg-[var(--input-bg)] text-[var(--text)] cursor-pointer transition-all"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((v) => !v)}
          >
            ☰
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-3 ml-auto mr-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-2xl no-underline font-semibold transition-all ${
                  isActive
                    ? "bg-[var(--nav-link-active-bg)] text-[var(--nav-link-active-fg)]"
                    : "text-[var(--nav-link)]"
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/companies"
              className={({ isActive }) =>
                `px-3 py-2 rounded-2xl no-underline font-semibold transition-all ${
                  isActive
                    ? "bg-[var(--nav-link-active-bg)] text-[var(--nav-link-active-fg)]"
                    : "text-[var(--nav-link)]"
                }`
              }
            >
              Companies
            </NavLink>
          </nav>

          {/* Desktop theme toggle */}
          <button
            className="hidden md:flex items-center justify-center px-3 py-2 rounded-xl bg-[var(--input-bg)] text-[var(--text)] cursor-pointer transition-all"
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>

          {/* Mobile navigation overlay */}
          {navOpen && (
            <div
              className="fixed inset-0 bg-black/32 z-50 md:hidden flex items-start justify-end"
              onClick={() => setNavOpen(false)}
            >
              <nav
                className="flex flex-col w-full bg-[var(--nav-bg)] border-b border-[var(--border)] gap-0 pt-6 pb-4 animate-slideDown"
                onClick={(e) => e.stopPropagation()}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-8 py-4 no-underline font-semibold transition-all border-b border-[var(--border)] ${
                      isActive
                        ? "bg-[var(--nav-link-active-bg)] text-[var(--nav-link-active-fg)]"
                        : "text-[var(--nav-link)]"
                    }`
                  }
                  end
                  onClick={() => setNavOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/companies"
                  className={({ isActive }) =>
                    `px-8 py-4 no-underline font-semibold transition-all border-b border-[var(--border)] ${
                      isActive
                        ? "bg-[var(--nav-link-active-bg)] text-[var(--nav-link-active-fg)]"
                        : "text-[var(--nav-link)]"
                    }`
                  }
                  onClick={() => setNavOpen(false)}
                >
                  Companies
                </NavLink>
              </nav>
            </div>
          )}
        </header>
      )}

      <main className="flex-1 px-4 py-8 md:px-12">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

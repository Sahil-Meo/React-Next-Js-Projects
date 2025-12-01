import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AuthContext } from "../../context/AuthContext"; // ✅ Import AuthContext

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { openModal } = useContext(AuthContext); // ✅ use modal controls from context

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/blogs", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  const getNavLinkClasses = ({ isActive }) => {
    const base =
      "block py-2 px-3 rounded-sm transition-colors duration-200 text-base";

    if (isActive) {
      return `${base} text-primary-foreground bg-primary md:bg-transparent md:text-primary md:p-0`;
    }

    return `${base} text-fg hover:bg-surface hover:text-primary md:hover:bg-transparent md:hover:text-primary md:p-0`;
  };

  return (
    <nav className="bg-card border-b border-border fixed w-full z-20 top-0 start-0 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity"
          aria-label="Go to homepage"
          onClick={closeMenu}
        >
          <img
            src="/hero-section-image.png"
            className="h-8"
            alt="Website Logo"
            loading="lazy"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-fg">
            AI Blogs
          </span>
        </Link>

        {/* Right-side controls */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 text-muted-foreground rounded-lg hover:bg-surface/50 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>

          {/* Get Started button (opens modal instead of navigating) */}
          <button
            type="button"
            onClick={() => openModal()} // ✅ Trigger modal from context
            className="text-primary-foreground bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary/40 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
          >
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted-foreground rounded-lg md:hidden hover:bg-surface/50 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            }`}
          id="navbar-menu"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-border rounded-lg bg-surface md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={getNavLinkClasses}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;

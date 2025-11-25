import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#ff8a65] via-[#ff6b6b] to-[#8e44ad] text-white shadow-lg">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-4">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/navbar-log.png"
            alt="Brand Logo"
            className="h-8"
          />
          <span className="text-2xl font-bold tracking-wide">Redux</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-[#ff8a65] via-[#ff6b6b] to-[#8e44ad] md:bg-transparent md:space-x-8 px-6 md:px-0 pb-4 md:pb-0 z-50 transition-all`}
        >
          {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block py-2 md:py-0 font-medium text-white hover:text-[#ffe9e3] transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

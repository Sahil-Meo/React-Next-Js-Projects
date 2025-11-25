import React from "react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Gradient accent — Sunset Glow */}
      <div className="h-1 w-full bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ffcc70]" />

      <div className="py-14">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <a
              href="#"
              aria-label="Pagedone — home"
              className="inline-flex justify-center mb-8"
            >
              {/* Replace the src below with your actual svg/png path if you want the original inline svg. */}
              <img
                src="/nav-log.png"
                alt="Pagedone"
                className="w-40 object-contain"
              />
            </a>

            {/* Links */}
            <ul className="text-lg flex flex-col items-center justify-center gap-7 md:flex-row md:gap-12 mb-10 pb-10 border-b border-gray-100">
              {["Pagedone", "Products", "Resources", "Blogs", "Support"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-700 hover:text-[#ff7e5f] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Social icons */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <a
                href="#"
                aria-label="Twitter"
                className="text-slate-700 hover:text-[#ff7e5f] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 5.8c-.6.3-1.3.6-2 .7.7-.4 1.3-1 1.6-1.8-.6.4-1.4.7-2.2.9-.6-.6-1.5-1-2.4-1-1.8 0-3.2 1.8-2.8 3.4-2.4-.1-4.6-1.3-6-3.1-.8 1.4-.2 3.3 1.1 4.2-.5 0-1-.2-1.4-.4 0 1.6 1.1 3 2.7 3.3-.5.1-1 .1-1.6 0 .5 1.7 2.1 2.9 3.9 2.9-1.5 1.2-3.4 1.8-5.3 1.8H6c1.9 1.2 4.2 1.9 6.6 1.9 7.9 0 12.2-6.6 12.2-12.3v-.6c.8-.6 1.4-1.3 1.9-2.1-.7.3-1.5.5-2.3.6z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-700 hover:text-[#ff7e5f] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm5.3-2.6a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-700 hover:text-[#ff7e5f] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5a2.5 2.5 0 0 0 0-5zm.02 6.5H2V21h3V10zM9 10h2.9v1.5h.04c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.6V21h-3v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.6V21H9V10z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-slate-500">
              ©{" "}
              <a
                href="https://pagedone.io/"
                className="font-medium text-slate-700 hover:text-[#ff7e5f] transition-colors"
              >
                pagedone
              </a>{" "}
              2024 — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

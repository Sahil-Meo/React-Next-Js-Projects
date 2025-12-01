import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-[rgb(var(--footer))] text-[rgb(var(--footer-foreground))] shadow-md"
    >
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
        {/* Top Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/hero-section-image.png"
              className="h-8"
              alt="AI Blog Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              AI Blog
            </span>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-base font-medium text-[rgb(var(--muted-foreground))] sm:mb-0">
            <li>
              <Link
                to="/about"
                className="hover:text-[rgb(var(--primary-400))] me-4 md:me-6 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[rgb(var(--primary-400))] me-4 md:me-6 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/licensing"
                className="hover:text-[rgb(var(--primary-400))] me-4 md:me-6 transition-colors"
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[rgb(var(--primary-400))] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-[rgb(var(--border))] sm:mx-auto lg:my-8" />

        {/* Bottom Text */}
        <span className="block text-sm text-[rgb(var(--muted-foreground))] sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="hover:text-[rgb(var(--primary-400))] transition-colors"
          >
            AI Blogs
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

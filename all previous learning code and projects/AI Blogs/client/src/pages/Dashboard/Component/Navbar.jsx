import { Menu, Search } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
     const [dropdownOpen, setDropdownOpen] = useState(false);
     const [searchQuery, setSearchQuery] = useState("");
     

     return (
          <nav className="fixed top-0 z-50 w-full bg-[rgb(var(--surface))] border-b border-[rgb(var(--border))]">
               <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                         {/* Left section */}
                         <div className="flex items-center">
                              {/* Mobile menu button */}
                              <button
                                   type="button"
                                   className="inline-flex items-center p-2 text-sm text-[rgb(var(--muted-foreground))] rounded-lg sm:hidden hover:bg-[rgb(var(--primary-50))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
                              >
                                   <span className="sr-only">Open sidebar</span>
                                   <Menu className="w-6 h-6" /> 
                              </button>

                              {/* Logo */}
                              <a href="/" className="flex items-center ms-2 md:me-24">
                                   <img
                                        src="/hero-section-image.png"
                                        className="h-10 me-3"
                                        alt="Logo"
                                   />
                                   <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-[rgb(var(--fg))]">
                                        AI Blogs
                                   </span>
                              </a>
                         </div>



                         {/* Right section */}
                         <div className="flex items-center gap-6 w-full justify-end">
                              {/* Search bar */}
                              <div className="flex relative items-center max-w-sm md:w-1/4">
                                   <input
                                        id="searchfield"
                                        type="text"
                                        className="w-full px-4 py-[6px] rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--input))] text-[rgb(var(--fg))] placeholder-[rgb(var(--muted-foreground))] shadow-sm focus:ring-2 focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))] outline-none"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                   />
                                   <label
                                        htmlFor="searchfield"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgb(var(--muted-foreground))]"
                                   >
                                        <Search className="w-5 h-5" />
                                   </label>
                              </div>
                              <div className="flex items-center">
                                   <div className="relative">
                                        <button
                                             onClick={() => setDropdownOpen(!dropdownOpen)}
                                             type="button"
                                             className="flex text-sm rounded-full focus:ring-2 focus:ring-[rgb(var(--ring))]"
                                        >
                                             <span className="sr-only">Open user menu</span>
                                             <img
                                                  className="w-10 h-10 rounded-full border border-[rgb(var(--border))]"
                                                  src="/user-avatar.jpg"
                                                  alt="user"
                                             />
                                        </button>

                                        {/* Dropdown */}
                                        {dropdownOpen && (
                                             <div className="absolute right-0 mt-2 w-48 bg-[rgb(var(--surface))] divide-y divide-[rgb(var(--border))] rounded-xl shadow-lg">
                                                  <div className="px-4 py-3">
                                                       <p className="text-sm text-[rgb(var(--fg))]">
                                                            Neil Sims
                                                       </p>
                                                       <p className="text-sm font-medium text-[rgb(var(--muted-foreground))] truncate">
                                                            neil.sims@flowbite.com
                                                       </p>
                                                  </div>
                                                  <ul className="py-1">
                                                       {["Dashboard", "Settings", "Earnings", "Sign out"].map(
                                                            (item) => (
                                                                 <li key={item}>
                                                                      <a
                                                                           href="#"
                                                                           className="block px-4 py-2 text-sm text-[rgb(var(--muted-foreground))] hover:bg-[rgb(var(--primary-50))] hover:text-[rgb(var(--fg))] rounded-lg"
                                                                      >
                                                                           {item}
                                                                      </a>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = ({ onFilterChange }) => {
     const [selectedCategory, setSelectedCategory] = useState("All");
     const [sortOption, setSortOption] = useState("Newest");

     const categories = ["All", "Destination", "Culinary", "Lifestyle", "Tips & Hacks"];
     const sortOptions = ["Newest", "Oldest", "Most Popular", "A-Z", "Z-A"];

     const handleCategoryChange = (category) => {
          setSelectedCategory(category);
     };

     const handleSortChange = (e) => {
          setSortOption(e.target.value);
     };

     useEffect(() => {
          if (onFilterChange) {
               onFilterChange({
                    category: selectedCategory,
                    sort: sortOption,
               });
          }
          console.log("Querying backend with:", {
               category: selectedCategory,
               sort: sortOption,
          });
     }, []);

     return (
          <div className="bg-[rgb(var(--surface))] shadow-sm border-b border-[rgb(var(--border))]">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-3">

                         {/* Category Navigation */}
                         <div className="flex flex-wrap gap-2">
                              {categories.map((category) => (
                                   <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${selectedCategory === category
                                             ? "bg-[rgb(var(--primary-500))] text-[rgb(var(--primary-foreground))] shadow-sm"
                                             : "text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--primary-50))]"
                                             }`}
                                   >
                                        {category}
                                   </button>
                              ))}
                         </div>

                         {/* Sort Dropdown */}
                         <div className="flex items-center space-x-2">
                              <span className="text-sm text-[rgb(var(--muted-foreground))]">Sort by:</span>
                              <select
                                   value={sortOption}
                                   onChange={handleSortChange}
                                   className="text-sm border border-[rgb(var(--border))] rounded-md py-1.5 px-3 
                         text-[rgb(var(--fg))] bg-[rgb(var(--surface))] 
                         focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))]"
                              >
                                   {sortOptions.map((option) => (
                                        <option key={option} value={option}>
                                             {option}
                                        </option>
                                   ))}
                              </select>
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default Navbar;

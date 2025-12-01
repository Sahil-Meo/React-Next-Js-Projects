import React, { useState } from "react";
import ConfirmModel from "../../../components/ConfirmModel";

import {
  Home,
  LayoutGrid,
  Mail,
  Users,
  ShoppingBag,
  LogIn,
  User,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";





const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      navigate("/");
    }, 1000);
  };

  const handleSetOpen = (item) => {
    if (item.name === "Sign Out") {
      setOpen(true);
      console.log("Sign Out clicked");
      
    }
  };


  const menuItems = [
    { name: "Overview", icon: <Users size={18} />, link: "overview" },
    { name: "Add Posts", icon: <LayoutGrid size={18} />, link: "add-post", badge: "Pro" },
    { name: "All Posts", icon: <ShoppingBag size={18} />, link: "all-posts" },
    { name: "Profile", icon: <User size={18} />, link: "profile" },
    { name: "Sign Out", icon: <LogIn size={18} />, link: "", fn: handleSetOpen },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-[rgb(var(--surface))] border-r border-gray-300"
        aria-label="Sidebar"
      >

        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item?.link}
                  onClick={() => item?.fn && item?.fn(item.name)}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-lg transition-colors duration-200 group
                     ${isActive
                      ? "bg-[rgb(var(--primary-50))] text-[rgb(var(--primary-600))] font-semibold"
                      : "text-[rgb(var(--fg))]"
                    }
                     `
                  }
                >
                  <span
                    className={`mr-3 ${item.isActive
                      ? "text-[rgb(var(--primary-600))]"
                      : "text-[rgb(var(--muted-foreground))]"
                      } group-hover:text-[rgb(var(--fg))]`}
                  >
                    {item.icon}
                  </span>
                  <span className="flex-1 whitespace-nowrap">{item.name}</span>
                  {item.badge && (
                    <span
                      className="inline-flex items-center justify-center px-2 ms-3 text-xs font-medium rounded-full bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))]"
                    >
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>


      <main className="flex-1 p-6 ml-64 pt-20 min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
        <Outlet />
      </main>

      <ConfirmModel
        open={open}
        title="Sign out"
        description="Are you sure you want to sign out? You will be returned to the homepage."
        onCancel={() => setOpen(false)}
        onConfirm={handleLogout}
        loading={loading}
      />

    </div>
  );
};

export default Sidebar;

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// BlogsTable.jsx
// Theme: uses your CSS variables (defined in global stylesheet) for colors
// This preserves the Tailwind layout while applying your color scheme via inline styles

const sampleBlogs = [
     {
          id: 1,
          title: "The Future of Web Development: Trends to Watch in 2025",
          author: "Sarah Johnson",
          date: "March 15, 2025",
          readTime: "8 min read",
          image:
               "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
          category: "Web Development",
          status: "published", // or 'draft'
     },
     {
          id: 2,
          title: "Design Systems: Scaling UI Across Teams",
          author: "Aamir Khan",
          date: "April 02, 2025",
          readTime: "6 min read",
          image:
               "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
          category: "Design",
          status: "draft",
     },
];

export default function BlogsTable({
     initialBlogs = sampleBlogs,
     onEdit,
     onDelete,
     onBulkDelete,
}) {
     const navigate = useNavigate();

     // State
     const [blogs, setBlogs] = useState(initialBlogs);
     const [search, setSearch] = useState("");
     const [selectedIds, setSelectedIds] = useState(new Set());

     // Keep local state in sync if parent updates initialBlogs
     useEffect(() => setBlogs(initialBlogs), [initialBlogs]);

     // Filtered list based on search
     const filteredBlogs = useMemo(() => {
          if (!search.trim()) return blogs;
          const q = search.toLowerCase();
          return blogs.filter((b) => {
               return (
                    b.title.toLowerCase().includes(q) ||
                    (b.author && b.author.toLowerCase().includes(q)) ||
                    (b.category && b.category.toLowerCase().includes(q))
               );
          });
     }, [blogs, search]);

     // Toggle single select
     function toggleSelect(id) {
          setSelectedIds((prev) => {
               const next = new Set(prev);
               if (next.has(id)) next.delete(id);
               else next.add(id);
               return next;
          });
     }

     // Toggle select all visible (filtered) rows
     function toggleSelectAllVisible() {
          setSelectedIds((prev) => {
               const visibleIds = filteredBlogs.map((b) => b.id);
               const next = new Set(prev);
               const allSelected = visibleIds.every((id) => next.has(id));
               if (allSelected) {
                    // clear visible
                    visibleIds.forEach((id) => next.delete(id));
               } else {
                    // add visible
                    visibleIds.forEach((id) => next.add(id));
               }
               return next;
          });
     }

     // Single delete (local) - if onDelete provided, call it
     function handleDelete(id) {
          if (onDelete) return onDelete(id);
          setBlogs((prev) => prev.filter((b) => b.id !== id));
          setSelectedIds((s) => {
               const n = new Set(s);
               n.delete(id);
               return n;
          });
     }

     // Bulk delete selected
     function handleDeleteSelected() {
          const ids = Array.from(selectedIds);
          if (!ids.length) return;
          if (onBulkDelete) return onBulkDelete(ids);

          // local delete
          setBlogs((prev) => prev.filter((b) => !selectedIds.has(b.id)));
          setSelectedIds(new Set());
     }

     // Edit
     function handleEdit(id) {
          if (onEdit) return onEdit(id);
          // default route, adjust to your routing
          navigate(`/posts/edit/${id}`);
     }

     const handleOpenBlog = (id) => {
          navigate(`/blog/${id}`);
     }

     // Helper styles that map to your CSS variables
     const styles = {
          surface: { backgroundColor: "rgb(var(--card))", color: "rgb(var(--fg))" },
          container: { backgroundColor: "rgb(var(--surface))", color: "rgb(var(--fg))", borderColor: "rgb(var(--border))" },
          input: { backgroundColor: "rgb(var(--input))", color: "rgb(var(--fg))", borderColor: "rgb(var(--border))" },
          primaryBtn: { backgroundColor: "rgb(var(--primary))", color: "rgb(var(--primary-foreground))" },
          dangerBtn: { backgroundColor: "rgb(var(--destructive))", color: "rgb(var(--destructive-foreground))" },
          badgePublished: { backgroundColor: "rgb(var(--success))", color: "rgb(var(--success-foreground))" },
          badgeDraft: { backgroundColor: "rgb(var(--warning))", color: "rgb(var(--warning-foreground))" },
          muted: { color: "rgb(var(--muted-foreground))" },
          rowHover: { backgroundColor: "rgba(104,58,167,0.03)" }, // subtle hover using primary tint
     };

     return (
          <div className="w-full " style={styles.surface}>
               {/* Toolbar */}
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                         <div className="relative">
                              <label htmlFor="table-search" className="sr-only">
                                   Search
                              </label>
                              <input
                                   id="table-search"
                                   type="search"
                                   value={search}
                                   onChange={(e) => setSearch(e.target.value)}
                                   placeholder="Search by title, author or category"
                                   className="w-72 pl-10 pr-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none"
                                   style={{ ...styles.input, borderWidth: 1 }}
                              />
                              <svg
                                   className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                   viewBox="0 0 20 20"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                                   aria-hidden
                                   style={{ color: "rgb(var(--muted-foreground))" }}
                              >
                                   <path
                                        d="M19 19L14 14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                                   <path
                                        d="M8 14a6 6 0 100-12 6 6 0 000 12z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                   />
                              </svg>
                         </div>

                         {selectedIds.size > 0 && (
                              <button
                                   onClick={handleDeleteSelected}
                                   className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg shadow"
                                   style={styles.dangerBtn}
                              >
                                   Delete ({selectedIds.size})
                              </button>
                         )}
                    </div>

                    <div className="flex items-center gap-2">
                         <button
                              onClick={() => navigate("/posts/new")}
                              className="px-4 py-2 text-sm font-medium rounded-lg shadow"
                              style={styles.primaryBtn}
                         >
                              + New Post
                         </button>
                    </div>
               </div>

               {/* Table */}
               <div className="relative overflow-x-auto rounded-lg border" style={{ borderColor: "rgb(var(--border))" }}>
                    <table className="min-w-full text-left divide-y" >
                         <thead style={{ backgroundColor: "rgb(var(--primary-50))" }}>
                              <tr>
                                   <th className="w-12 px-4 py-3">
                                        <input
                                             type="checkbox"
                                             aria-label="Select all visible"
                                             onChange={toggleSelectAllVisible}
                                             checked={
                                                  filteredBlogs.length > 0 && filteredBlogs.every((b) => selectedIds.has(b.id))
                                             }
                                             className="w-4 h-4"
                                             style={{ accentColor: "rgb(var(--primary))" }}
                                        />
                                   </th>
                                   <th className="px-4 py-3">Post</th>
                                   <th className="px-4 py-3">Category</th>
                                   <th className="px-4 py-3">Status</th>
                                   <th className="px-4 py-3">Date</th>
                                   <th className="px-4 py-3">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {filteredBlogs.length === 0 ? (
                                   <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-sm" style={styles.muted}>
                                             No posts found.
                                        </td>
                                   </tr>
                              ) : (
                                   filteredBlogs.map((blog) => (
                                        <tr
                                             key={blog.id}
                                             className="transition-colors"
                                             style={{ cursor: "default" }}
                                        >
                                             <td className="px-4 py-4 align-top">
                                                  <input
                                                       type="checkbox"
                                                       aria-label={`Select post ${blog.title}`}
                                                       checked={selectedIds.has(blog.id)}
                                                       onChange={() => toggleSelect(blog.id)}
                                                       className="w-4 h-4"
                                                       style={{ accentColor: "rgb(var(--primary))" }}
                                                  />
                                             </td>

                                             <td className="px-4 py-4">
                                                  <div className="flex items-start gap-3">
                                                       <img
                                                            src={blog.image}
                                                            alt={blog.title}
                                                            className="w-20 h-12 rounded-md object-cover flex-shrink-0"
                                                            style={{ border: `1px solid rgb(var(--border))` }}
                                                       />
                                                       <div>
                                                            <div className="font-semibold  cursor-pointer" style={{ color: "rgb(var(--fg))" }} onClick={() => handleOpenBlog(blog.id)} >{blog.title}</div>
                                                            <div className="text-xs" style={styles.muted}>{blog.author} • {blog.readTime}</div>
                                                       </div>
                                                  </div>
                                             </td>

                                             <td className="px-4 py-4 align-top">
                                                  <div className="text-sm" style={{ color: "rgb(var(--muted-foreground))" }}>{blog.category}</div>
                                             </td>

                                             <td className="px-4 py-4 align-top">
                                                  {blog.status === "published" ? (
                                                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize" style={{ backgroundColor: "rgb(var(--success))", color: "rgb(var(--success-foreground))" }}>
                                                            Published
                                                       </span>
                                                  ) : (
                                                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize" style={{ backgroundColor: "rgb(var(--warning))", color: "rgb(var(--warning-foreground))" }}>
                                                            Draft
                                                       </span>
                                                  )}
                                             </td>

                                             <td className="px-4 py-4 align-top text-sm" style={{ color: "rgb(var(--muted-foreground))" }}>{blog.date}</td>

                                             <td className="px-4 py-4 align-top text-sm">
                                                  <div className="flex items-center gap-3">
                                                       <button
                                                            onClick={() => handleEdit(blog.id)}
                                                            className="text-sm"
                                                            style={{ color: "rgb(var(--primary))", background: "transparent" }}
                                                       >
                                                            Edit
                                                       </button>

                                                       <button
                                                            onClick={() => handleDelete(blog.id)}
                                                            className="text-sm"
                                                            style={{ color: "rgb(var(--destructive))", background: "transparent" }}
                                                       >
                                                            Delete
                                                       </button>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))
                              )}
                         </tbody>
                    </table>
               </div>
          </div>
     );
}

// ConfirmModal.jsx
import React, { useEffect } from "react";

export default function ConfirmModel({ open, title, description, onCancel, onConfirm, loading }) {
     useEffect(() => {
          if (!open) return;
          // simple focus on modal when open
          const first = document.getElementById("confirm-modal-cancel");
          first?.focus();

          const handleEsc = (e) => { if (e.key === "Escape") onCancel(); };
          window.addEventListener("keydown", handleEsc);
          return () => window.removeEventListener("keydown", handleEsc);
     }, [open, onCancel]);

     if (!open) return null;

     return (
          <div
               role="dialog"
               aria-modal="true"
               aria-labelledby="confirm-modal-title"
               className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          >
               <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-5">
                    <h3 id="confirm-modal-title" className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{description}</p>

                    <div className="mt-5 flex justify-end gap-2">
                         <button
                              id="confirm-modal-cancel"
                              onClick={onCancel}
                              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
                              aria-label="Cancel"
                         >
                              Cancel
                         </button>
                         <button
                              onClick={onConfirm}
                              disabled={loading}
                              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 focus:outline-none"
                              aria-label="Confirm sign out"
                         >
                              {loading ? "Signing out..." : "Sign out"}
                         </button>
                    </div>
               </div>
          </div>
     );
}

import React from "react";

const ContactForm = ({ onSubmit }) => {
     return (
          <form
               onSubmit={onSubmit}
               className="space-y-6 bg-[rgb(var(--surface))] p-6 rounded-2xl shadow-lg "
          >
               {/* Name */}
               <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <div>
                         <label
                              htmlFor="firstname"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              First Name
                         </label>
                         <input
                              type="text"
                              id="firstname"
                              required
                              placeholder="first name"
                              className="w-full p-3 text-sm text-[rgb(var(--fg))] rounded-lg border border-[rgb(var(--border))] shadow-sm 
                       bg-[rgb(var(--surface))] placeholder-[rgb(var(--muted-foreground))] 
                       focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))]"
                         />
                    </div>

                    <div>
                         <label
                              htmlFor="lastname"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              Last Name
                         </label>
                         <input
                              type="text"
                              id="lastname"
                              required
                              placeholder="last name"
                              className="w-full p-3 text-sm text-[rgb(var(--fg))] rounded-lg border border-[rgb(var(--border))] shadow-sm 
                       bg-[rgb(var(--surface))] placeholder-[rgb(var(--muted-foreground))] 
                       focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))]"
                         />
                    </div>
               </div>

               {/* Contact Info */}
               <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <div>
                         <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              Email
                         </label>
                         <input
                              type="email"
                              id="email"
                              required
                              placeholder="contact@example.com"
                              className="w-full p-3 text-sm text-[rgb(var(--fg))] rounded-lg border border-[rgb(var(--border))] shadow-sm 
                       bg-[rgb(var(--surface))] placeholder-[rgb(var(--muted-foreground))] 
                       focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))]"
                         />
                    </div>

                    <div>
                         <label
                              htmlFor="subject"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              Subject
                         </label>
                         <input
                              type="text"
                              id="subject"
                              required
                              placeholder="Let us know how we can help you"
                              className="w-full p-3 text-sm text-[rgb(var(--fg))] rounded-lg border border-[rgb(var(--border))] shadow-sm 
                       bg-[rgb(var(--surface))] placeholder-[rgb(var(--muted-foreground))] 
                       focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))]"
                         />
                    </div>
               </div>

               {/* Message */}
               <div>
                    <label
                         htmlFor="message"
                         className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                    >
                         Your message
                    </label>
                    <textarea
                         id="message"
                         rows="6"
                         required
                         placeholder="Leave a comment..."
                         className="w-full p-3 text-sm text-[rgb(var(--fg))] rounded-lg border border-[rgb(var(--border))] shadow-sm 
                     bg-[rgb(var(--surface))] placeholder-[rgb(var(--muted-foreground))] 
                     focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))]"
                    ></textarea>
               </div>

               {/* Submit Button */}
               <button
                    type="submit"
                    className="w-full sm:w-auto py-3 px-6 text-sm font-medium rounded-lg 
                   bg-[rgb(var(--primary-500))] text-[rgb(var(--primary-foreground))] 
                   hover:bg-[rgb(var(--primary-600))] shadow-md 
                   focus:ring-4 focus:outline-none focus:ring-[rgb(var(--ring))] transition"
               >
                    Send message
               </button>
          </form>
     );
};

export default ContactForm;

import React from "react";

const BlogSecondCard = () => {
     const Blog =
          {
               id: 1,
               date: "20/20/20",
               author: "Sahil Meo",
               description: "here is the short description about this blog",
               title: "This is the title of the blog",
               image: "/ai-project-8.png",
               link: "#"
          }
     
     return (
          <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
               <div className="flex items-center">
                    <img
                         src={Blog.image}
                         alt={Blog.title}
                         className="rounded-t-2xl w-full object-cover"
                    />
               </div>
               <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                    <div className="flex items-center gap-2 mb-4">
                         <span className="text-indigo-600 font-medium mb-3 block">{Blog.date}</span>
                         <span className="text-indigo-600 font-medium mb-3 block">{Blog.author}</span>
                    </div>
                    <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                         {Blog.title}
                    </h4>
                    <p className="text-gray-500 leading-6 mb-10">{Blog.description}</p>
                    <a
                         href={Blog.link || "#"}
                         className="cursor-pointer text-lg text-indigo-600 font-semibold"
                    >
                         Read more..
                    </a>
               </div>
          </div>
     );
};

export default BlogSecondCard;

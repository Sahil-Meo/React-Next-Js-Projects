import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // console.log(blog);

  return (
    <div className="max-w-sm bg-card border border-border rounded-lg shadow-sm overflow-hidden mx-auto">
      {/* Blog Image */}
      <Link to={`/blog/${blog?.id}`} aria-label={`Read ${blog?.title}`}>
        <img
          className="w-full h-56 object-cover"
          src={blog?.image}
          alt={blog?.title}
        />
      </Link>

      <div className="p-5">
        <div className="flex items-center justify-between text-base  font-normal  mr-10 mb-2">
          <span className=" text-muted-foreground"><span className="font-semibold ">Date</span>: {Date.now()}</span>
          <span className=" text-muted-foreground"><span className="font-semibold ">Author</span>: By Sahil</span>
        </div>
        <Link to={`/blog/${blog?.id}`}>
          <h5 className="mb-3 text-2xl font-semibold tracking-tight text-fg">
            {blog?.title}
          </h5>
        </Link>

        <Link
          to={`/blog/${blog?.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg
                     hover:bg-primary/80 focus:outline-none focus:ring-4 focus:ring-primary/40 transition-colors"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

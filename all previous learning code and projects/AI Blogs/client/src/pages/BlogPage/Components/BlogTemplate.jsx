import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

const BlogTemplate = ({ blogData }) => {

  const renderContent = (content) => {
    return content?.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
              {item.text}
            </p>
          );
        case 'heading':
          return (
            <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              {item.text}
            </h2>
          );
        case 'image':
          return (
            <div key={index} className="my-8">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full rounded-lg shadow-lg"
              />
              {item.caption && (
                <p className="text-sm text-gray-600 italic text-center mt-3">
                  {item.caption}
                </p>
              )}
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <article className="max-w-4xl mx-auto py-12 ">

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {blogData?.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="font-medium">{blogData?.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{blogData?.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{blogData?.readTime}</span>
          </div>
        </div>
      </header>

      <div className="mb-10">
        <img
          src={blogData?.image}
          alt="Blog featured image"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {renderContent(blogData?.content)}
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            {blogData?.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{blogData?.author}</p>
            <p className="text-gray-600 text-sm">Published on {blogData?.date}</p>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default BlogTemplate;
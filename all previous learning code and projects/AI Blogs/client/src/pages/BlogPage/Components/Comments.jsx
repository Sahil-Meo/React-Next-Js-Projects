import React, { useState } from 'react';

const MAX_LENGTH = 50;

const Comments = ({ comment }) => {
  const [expanded, setExpanded] = useState({});
  
  if (!comment) {
    return null;
  }
  
  const isLong = comment.text && comment.text.length > MAX_LENGTH;
  const isExpanded = expanded[comment.id];
  
  const handleToggle = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const displayText = isLong && !isExpanded 
    ? comment.text.slice(0, MAX_LENGTH) + '...'
    : comment.text;

  return (
    <div className="flex w-full items-start gap-3 p-3">
      <img
        src={comment.avatar}
        alt={`${comment.name || 'User'} avatar`}
        className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex-shrink-0"
        onError={(e) => {
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMzIgMzJDMzIgMjYuNDc3MiAyNy41MjI4IDIyIDIyIDIySDE4QzEyLjQ3NzIgMjIgOCAyNi40NzcyIDggMzJWMzJIMzJWMzJaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
        }}
      />
      
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
            {comment.name || 'Anonymous'}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 whitespace-nowrap">
            {comment.date}
          </span>
        </div>
        
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <p className="whitespace-pre-wrap break-words leading-relaxed">
            {displayText}
          </p>
          
          {isLong && (
            <button
              onClick={() => handleToggle(comment.id)}
              className="mt-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200 focus:outline-none  rounded"
              type="button"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Show less text' : 'Show more text'}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Comments;
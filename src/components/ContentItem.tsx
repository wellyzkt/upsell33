import React from 'react';

interface ContentItemProps {
  number: number;
  title: string;
  description: string;
  tag: string;
}

const ContentItem: React.FC<ContentItemProps> = ({ number, title, description, tag }) => {
  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg">
        <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          {/* Big number in background */}
          <span className="absolute text-9xl font-bold text-red-800 opacity-80">
            {number}
          </span>
          
          {/* Image placeholder - in a real implementation, this would be an actual image */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="sr-only">Content thumbnail</span>
          </div>
          
          {/* Tag in top right */}
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {tag}
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-center">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <button className="mt-2 text-xs px-4 py-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
          Acessar
        </button>
      </div>
    </div>
  );
};

export default ContentItem;
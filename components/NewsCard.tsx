import React from 'react';
import type { NewsArticle } from '../types';
import CalendarIcon from './icons/CalendarIcon';
import { Link } from 'react-router-dom';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
  return (
    <Link to={`/news/${article.id}`} className="block group">
      <div className="relative p-1 bg-gray-900/30 rounded-xl border border-gray-800/60 shadow-lg hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
        <div className="absolute top-2 left-2 w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-300"></div>
        <div className="absolute top-2 right-2 w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-300"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-300"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-300"></div>
        
        <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-lg text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-2">{article.title}</h3>
          <p className="text-sm text-gray-400 mt-2 line-clamp-3 flex-grow">{article.summary}</p>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
            <span>{article.source}</span>
            <div className="flex items-center space-x-1.5">
              <CalendarIcon />
              <span>{article.publishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
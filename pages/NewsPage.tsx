import React from 'react';
import { MOCK_NEWS } from '../constants';
import NewsCard from '../components/NewsCard';

const NewsPage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
      <div className="relative p-4 sm:p-8 bg-gray-900/20 rounded-xl border border-gray-800/50">
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white font-heading tracking-wide">
            Daily Tech News
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Your daily digest of the most important happenings in the world of technology and design, curated for strategic thinkers.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_NEWS.map(article => (
            <NewsCard key={article.id} article={article} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
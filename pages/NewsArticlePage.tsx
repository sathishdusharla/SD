import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_NEWS } from '../constants';
import type { NewsArticle } from '../types';
import CalendarIcon from '../components/icons/CalendarIcon';

const NewsArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    const foundArticle = MOCK_NEWS.find(a => a.id === id) || null;
    setArticle(foundArticle);
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 sm:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <Link to="/news" className="text-red-400 hover:underline mt-4 inline-block">Go back to News</Link>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header Image */}
        <div className="relative mb-8 p-1 bg-gray-900/30 rounded-xl border border-gray-800/60 shadow-lg">
            <div className="absolute top-2 left-2 w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-gray-600 rounded-full"></div>
            <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-auto max-h-[500px] object-cover rounded-lg"
            />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 my-6 text-gray-400 border-y border-gray-800 py-4">
                <p className="text-lg text-gray-300 font-bold">{article.source}</p>
                <div className="flex items-center space-x-2">
                    <CalendarIcon />
                    <span>Published {article.publishedAt}</span>
                </div>
            </div>
            
            <div className="prose prose-invert prose-lg text-gray-300 max-w-none leading-relaxed space-y-6">
                {article.content.split('\\n\\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <Link to="/news" className="mt-12 inline-block px-5 py-3 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                Back to All News
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage;
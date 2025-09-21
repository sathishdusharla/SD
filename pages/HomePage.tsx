import React from 'react';
import { MOCK_VIDEOS } from '../constants';
import VideoCard from '../components/VideoCard';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      {/* Hero Section */}
      <div className="relative rounded-xl border border-gray-800/50 overflow-hidden my-8 p-6 sm:p-8 md:p-16 min-h-[340px] sm:min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop" alt="Blockchain Universe" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
           <div className="absolute inset-0 bg-blend-multiply opacity-50" style={{backgroundImage: 'radial-gradient(circle at top left, #ff2d2d44, transparent 60%), radial-gradient(circle at bottom right, #4a00e044, transparent 60%)'}}></div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-red-400">Go Everywhere, Reach Everywhere</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase mt-2 text-white font-heading tracking-wide">
            Design <br /> Universe
          </h1>
          <p className="mt-6 text-gray-300 max-w-prose">
            Exploring the frontiers of digital design and development. Join us as we dissect cutting-edge projects and share insights from the industry's best.
          </p>
          <a href="#latest-videos" className="mt-8 inline-block px-6 py-3 border border-gray-600 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
            Explore Videos
          </a>
        </div>
      </div>
      
      {/* Videos Section */}
      <section id="latest-videos" className="py-16">
        <div className="relative p-4 sm:p-8 bg-gray-900/20 rounded-xl border border-gray-800/50">
           <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 uppercase font-heading tracking-wider">Latest Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_VIDEOS.map(video => (
                <VideoCard key={video.id} video={video} />
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
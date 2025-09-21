import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_VIDEOS } from '../constants';
import type { Video } from '../types';
import LikeIcon from '../components/icons/LikeIcon';
import ViewsIcon from '../components/icons/ViewsIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import CustomVideoPlayer from '../components/CustomVideoPlayer';

const VideoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const foundVideo = MOCK_VIDEOS.find(v => v.id === id) || null;
    setVideo(foundVideo);
    window.scrollTo(0, 0);
  }, [id]);

  if (!video) {
    return (
      <div className="container mx-auto px-4 sm:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold">Video not found</h2>
        <Link to="/" className="text-red-400 hover:underline mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }
  
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Video Player Section - YouTube-like responsive layout */}
      <div className="w-full">
        {/* Mobile: Full width, Desktop: Centered with max-width */}
        <div className="video-player-container px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
          <div className="relative bg-black rounded-none sm:rounded-lg overflow-hidden shadow-2xl">
            {/* 16:9 aspect ratio maintained */}
            <div className="aspect-video w-full">
              {video.videoUrl ? (
                <CustomVideoPlayer video={video} />
              ) : (
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Information Section - YouTube-like layout */}
      <div className="video-player-container px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Video Title */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4 leading-tight">
          {video.title}
        </h1>
        
        {/* Video Stats and Author - YouTube style */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {/* Left side: Channel info */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {video.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-white font-medium text-base sm:text-lg">{video.author}</p>
              <p className="text-gray-400 text-sm">Published {video.publishedAt}</p>
            </div>
          </div>
          
          {/* Right side: Action buttons - YouTube style */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 rounded-full px-3 sm:px-4 py-2">
              <LikeIcon />
              <span className="text-white text-sm sm:text-base font-medium">{formatNumber(video.likes)}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 rounded-full px-3 sm:px-4 py-2">
              <ViewsIcon />
              <span className="text-white text-sm sm:text-base font-medium">{formatNumber(video.views)} views</span>
            </div>
          </div>
        </div>
        
        {/* Description Section */}
        <div className="bg-gray-900/40 rounded-xl p-4 sm:p-6 mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <CalendarIcon />
            <span className="text-gray-300 text-sm">Published {video.publishedAt}</span>
          </div>
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {video.description}
          </div>
        </div>

        {/* Back to Videos Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg transition-colors duration-200 font-medium"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to All Videos</span>
        </Link>
      </div>
    </div>
  );
};

export default VideoPage;
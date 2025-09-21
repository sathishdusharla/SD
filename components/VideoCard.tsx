import React from 'react';
import type { Video } from '../types';
import { Link } from 'react-router-dom';
import LikeIcon from './icons/LikeIcon';
import ViewsIcon from './icons/ViewsIcon';

interface VideoCardProps {
  video: Video;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="block group cursor-pointer">
      <div className="bg-transparent hover:bg-gray-900/20 rounded-xl transition-all duration-200 p-0">
        {/* YouTube-like thumbnail container */}
        <div className="relative mb-3">
          <div className="relative w-full overflow-hidden rounded-xl bg-gray-800">
            {/* 16:9 aspect ratio container */}
            <div className="aspect-[16/9] w-full">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-black/70 hover:bg-black/80 rounded-full p-2 sm:p-3 transform group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            {/* Duration badge - YouTube style */}
            <div className="absolute bottom-2 right-2">
              <span className="bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                {video.duration}
              </span>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200"></div>
          </div>
        </div>
        
        {/* Video info - YouTube layout */}
        <div className="px-0">
          {/* Title */}
          <h3 className="text-white font-medium text-sm sm:text-base leading-tight line-clamp-2 mb-1 group-hover:text-gray-100 transition-colors duration-200">
            {video.title}
          </h3>
          
          {/* Channel name */}
          <p className="text-gray-400 text-sm mb-1 hover:text-gray-300 transition-colors duration-200">
            {video.author}
          </p>
          
          {/* Video stats */}
          <div className="flex items-center text-gray-400 text-sm space-x-1">
            <span className="flex items-center space-x-1">
              <ViewsIcon />
              <span>{formatNumber(video.views)} views</span>
            </span>
            <span>•</span>
            <span>{video.publishedAt}</span>
          </div>
          
          {/* Likes - shown on hover or always visible on mobile */}
          <div className="flex items-center text-gray-400 text-sm mt-1 opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity duration-200">
            <LikeIcon />
            <span className="ml-1">{formatNumber(video.likes)} likes</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
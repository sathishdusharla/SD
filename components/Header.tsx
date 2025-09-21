import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'News', path: '/news' },
    { name: 'Technology', path: '/technology' },
    { name: 'Mission', path: '/mission' },
    { name: 'Careers', path: '/careers' },
    { name: 'About us', path: '/about' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center py-4 border-b border-gray-800/50">
            <Link to="/" className="text-lg sm:text-xl font-bold tracking-wider uppercase font-heading text-white">
              Strategic Designers
            </Link>
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              {navLinks.map(link => (
                 <Link key={link.name} to={link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
              ))}
            </nav>
            <div className="flex items-center">
                <Link to="/contact" className="hidden sm:block px-5 py-2 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                    Contact
                </Link>
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <MenuIcon />
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-95 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
             <Link to="/" className="text-lg sm:text-xl font-bold tracking-wider uppercase font-heading text-white">
              Strategic Designers
            </Link>
            <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-300 hover:text-white"
                aria-label="Close menu"
            >
                <CloseIcon />
            </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="text-2xl text-gray-300 hover:text-white transition-colors font-heading">
              {link.name}
            </Link>
          ))}
           <Link to="/contact" className="mt-4 px-6 py-3 border border-gray-600 rounded-md text-lg font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                Contact
            </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
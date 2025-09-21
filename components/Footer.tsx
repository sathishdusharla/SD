import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinkGroups = [
    {
      title: 'Company',
      links: ['Technology', 'Mission', 'Careers', 'About us'],
    },
    {
      title: 'Resources',
      links: ['Docs', 'Blog', 'Ecosystem', 'Community'],
    },
    {
      title: 'Connect',
      links: ['Twitter', 'Discord', 'LinkedIn', 'Contact'],
    },
  ];

  const internalLinks: { [key: string]: string } = {
    'Technology': '/technology',
    'Mission': '/mission',
    'Careers': '/careers',
    'About us': '/about',
    'Community': '/community',
    'Docs': '/docs',
    'Blog': '/news',
    'Ecosystem': '/ecosystem',
    'Contact': '/contact',
  };

  const externalLinks: { [key: string]: string } = {
    'Twitter': 'https://twitter.com',
    'Discord': 'https://discord.com',
    'LinkedIn': 'https://linkedin.com',
  };

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-center sm:text-left">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold tracking-wider uppercase font-heading text-white">
              STRATEGIC DESIGNERS
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xs mx-auto sm:mx-0">
              Building the future of digital experiences, one project at a time.
            </p>
          </div>

          {/* Links Wrapper */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => {
                    const internalTo = internalLinks[link];
                    const externalTo = externalLinks[link];
                    return (
                      <li key={link}>
                        {internalTo ? (
                          <Link to={internalTo} className="text-gray-400 hover:text-white transition-colors text-sm">
                            {link}
                          </Link>
                        ) : externalTo ? (
                          <a href={externalTo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                            {link}
                          </a>
                        ) : (
                          <span className="text-gray-600 text-sm">{link}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Strategic Designers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;